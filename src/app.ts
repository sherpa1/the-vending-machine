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
import StaffMember from "./classes/users/StaffMember";
import Token from "./classes/Token";

function init() {
  //initialization

  const john_doe = new Customer("John", "Doe");
  const carla_coe = new StaffMember("Carla", "Coe");

  const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");

  const vending_machine = new VendingMachine();

  john_doe.add_money_item(new Coin(1), new Coin(2), new Coin(0.5));

  carla_coe.add_money_item(new Token(), new Token(), new Token());

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

  vending_machine.add_coin(
    new Coin(1),
    new Coin(1),
    new Coin(1),
    new Coin(1),
    new Coin(1),
    new Coin(1),
    new Coin(1),
    new Coin(0.5),
    new Coin(0.5),
    new Coin(0.5),
    new Coin(0.5),
    new Coin(0.5),
    new Coin(0.2),
    new Coin(0.2),
    new Coin(0.2),
    new Coin(0.2),
    new Coin(0.2),
    new Coin(0.2),
    new Coin(0.1),
    new Coin(0.1),
    new Coin(0.1),
    new Coin(0.1),
    new Coin(0.1)
  );

  const water = ResourceFactory.make(ResourceFactory.WATER, 150);
  const cups = ResourceFactory.make(ResourceFactory.CUP, 50);
  const sugar = ResourceFactory.make(ResourceFactory.SUGAR, 150);
  const milk = ResourceFactory.make(ResourceFactory.MILK, 100);

  vending_machine.add_resource(
    maintenance_technician,
    sugar,
    cups,
    water,
    milk
  );

  //start scenario
  const selected_beverage_n1: Beverage = vending_machine.select(
    Coffee.ESPRESSO
  );

  const order_n1 = OrderFactory.make(john_doe, selected_beverage_n1);

  vending_machine.order(order_n1);
  vending_machine.pay();

  const selected_beverage_n2: Beverage = vending_machine.select(
    Coffee.CAPPUCCINO
  );

  const order_n2 = OrderFactory.make(carla_coe, selected_beverage_n2);

  vending_machine.order(order_n2);
  vending_machine.pay();
}

init();
