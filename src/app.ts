import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/users/Customer";
import Coffee from "./classes/beverages/Coffee";
import MaintenanceTechnician from "./classes/users/MaintenanceTechnician";
import Coin from "./classes/stockables/Coin";

const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");

const john_doe = new Customer("John", "Doe");

john_doe.add_money_item(new Coin(1));
// john_doe.add_money_item(new Coin(0.5));
// john_doe.add_money_item(new Coin(0.1));
// john_doe.add_money_item(new Coin(0.2));

const vending_machine = new VendingMachine();

const espresso = new Coffee("Espresso", 1, 1);

maintenance_technician.stock(vending_machine, [espresso]);

let coffee: Coffee = vending_machine.select(0) as Coffee;
console.log(coffee);

coffee.add_sugar(1);

console.log(`John Doe get ${john_doe.budget}€`);
console.log(`Selected coffee costs ${coffee.price}€`);

const result: boolean = vending_machine.order(coffee, john_doe);

if (result) {
  console.log(`John Doe has ${john_doe.budget}€`);
}
