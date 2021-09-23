import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/Customer";
import Coffee from "./classes/Coffee";

const john_doe = new Customer();

john_doe.money.value = 100;

const vending_machine = new VendingMachine();

let coffee: Coffee = vending_machine.select(0) as Coffee;
coffee.add_sugar(1);

console.log(`John Doe has ${john_doe.money.value}€`);

const result: boolean = vending_machine.order(coffee, john_doe);

if (result) console.log(`John Doe has bought a coffee`);

console.log(`Now, John Doe has ${john_doe.money.value}€`);
