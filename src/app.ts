import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/users/Customer";
import Coffee from "./classes/beverages/Coffee";
import Beverage from "./classes/beverages/Beverage";
import Coin from "./classes/Coin";
import MaintenanceTechnician from "./classes/users/MaintenanceTechnician";
import Resource from "./classes/Resource";
import ResourceFactory from "./classes/ResourceFactory";
import OrderFactory from "./classes/OrderFactory";

const john_doe = new Customer("John", "Doe");

john_doe.add_money_item(new Coin(1), new Coin(2), new Coin(0.5));

const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");
const vending_machine = new VendingMachine();

vending_machine.add_beverage(
  maintenance_technician,
  new Coffee(Coffee.ESPRESSO),
  new Coffee(Coffee.ESPRESSO)
);

const water = ResourceFactory.make(Resource.WATER, 150);
const cups = ResourceFactory.make(Resource.CUPS, 50);
const sugar = ResourceFactory.make(Resource.SUGAR, 150);

vending_machine.add_resource(maintenance_technician, sugar, cups, water);

const selected_beverage: Beverage = vending_machine.select_beverage(
  Coffee.ESPRESSO
);

const order = OrderFactory.make(john_doe, selected_beverage);

vending_machine.order_beverage(order);
