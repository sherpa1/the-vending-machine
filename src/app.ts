import VendingMachine from "./classes/VendingMachine";
import Customer from "./classes/users/Customer";
import Coffee from "./classes/beverages/Coffee";
import MaintenanceTechnician from "./classes/users/MaintenanceTechnician";

const maintenance_technician = new MaintenanceTechnician("Richard", "Roe");

const john_doe = new Customer("John", "Doe");

john_doe.money.value = 100;

const vending_machine = new VendingMachine();

const espresso = new Coffee("Espresso");

maintenance_technician.stock(vending_machine, [espresso]);

let coffee: Coffee = vending_machine.select(0) as Coffee;
coffee.add_sugar(1);

console.log(`John Doe has ${john_doe.money.value}€`);

const result: boolean = vending_machine.order(coffee, john_doe);
