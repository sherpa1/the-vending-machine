import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/users/Customer";
import Coffee from "./classes/beverages/Coffee";
import Beverage from "./classes/beverages/Beverage";
import BeverageWithSugar from "./classes/beverages/BeverageWithSugar";
import Coin from "./classes/Coin";
import MaintenanceTechnician from "./classes/users/MaintenanceTechnician";

const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");

const john_doe = new Customer("John", "Doe");

john_doe.add_money_item(new Coin(1));
john_doe.add_money_item(new Coin(0.5));
john_doe.add_money_item(new Coin(0.1));
john_doe.add_money_item(new Coin(0.2));

const vending_machine = new VendingMachine();

vending_machine.add(new Coffee(Coffee.ESPRESSO), new Coffee(Coffee.ESPRESSO));
vending_machine.cups = 100;

const selected_beverage: Beverage = vending_machine.select_beverage(
  Coffee.ESPRESSO
);

console.log(`John Doe's budget is : ${john_doe.budget}€`);
console.log(`Selected selected_beverage costs ${selected_beverage.price}€`);

const result: boolean = vending_machine.order_beverage(
  selected_beverage,
  john_doe
);

if (result) {
  console.log(`John Doe's budget is : ${john_doe.budget}€`);
}
