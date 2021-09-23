import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/Customer";
import Coffee from "./classes/Coffee";
import MaintenanceTechnician from "./classes/MaintenanceTechnician";

const jim = new MaintenanceTechnician("Jim", "Willson");

const john_doe = new Customer();

john_doe.money.value = 100;

const vending_machine = new VendingMachine();

const espresso = new Coffee("Espresso");

jim.stock(vending_machine, [espresso]);

let coffee: Coffee = vending_machine.select(0) as Coffee;
coffee.add_sugar(1);

console.log(`John Doe has ${john_doe.money.value}€`);

const result: boolean = vending_machine.order(coffee, john_doe);

if (result) console.log(`John Doe has bought a coffee`);

console.log(`Now, John Doe has ${john_doe.money.value}€`);
