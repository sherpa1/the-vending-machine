import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/users/Customer";
import Coffee from "./classes/beverages/Coffee";
import Tea from "./classes/beverages/Tea";
import Soup from "./classes/beverages/Soup";
import Beverage from "./classes/beverages/Beverage";
import Coin from "./classes/Coin";
import MaintenanceTechnician from "./classes/users/MaintenanceTechnician";
import ResourceFactory from "./classes/resources/ResourceFactory";
import OrderFactory from "./classes/OrderFactory";

function init() {
  const john_doe = new Customer("John", "Doe");

  john_doe.add_money_item(new Coin(1), new Coin(2), new Coin(0.5));

  const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");
  const vending_machine = new VendingMachine();

  vending_machine.add_beverage(
    maintenance_technician,
    new Coffee(Coffee.ESPRESSO),
    new Coffee(Coffee.CAPPUCCINO),
    new Coffee(Coffee.AMERICANO),
    new Coffee(Coffee.LUNGO),
    new Coffee(Coffee.MACCHIATO),
    new Tea(Tea.LEMON),
    new Tea(Tea.PEACH),
    new Tea(Tea.LEMON),
    new Soup(Soup.GASPACHO),
    new Soup(Soup.MINESTRONE),
    new Soup(Soup.TOMATOES)
  );

  const water = ResourceFactory.make(ResourceFactory.WATER, 150);
  const cups = ResourceFactory.make(ResourceFactory.CUP, 50);
  const sugar = ResourceFactory.make(ResourceFactory.SUGAR, 150);

  vending_machine.add_resource(maintenance_technician, sugar, cups, water);

  const selected_beverage: Beverage = vending_machine.select_beverage(
    Coffee.ESPRESSO
  );

  const order = OrderFactory.make(john_doe, selected_beverage);

  vending_machine.order_beverage(order);
}

init();
