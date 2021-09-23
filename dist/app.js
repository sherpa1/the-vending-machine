"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VendingMachine_1 = __importDefault(require("./classes/VendingMachine"));
const Customer_1 = __importDefault(require("./classes/Customer"));
const Coffee_1 = __importDefault(require("./classes/Coffee"));
const MaintenanceTechnician_1 = __importDefault(require("./classes/MaintenanceTechnician"));
const jim = new MaintenanceTechnician_1.default("Jim", "Willson");
const john_doe = new Customer_1.default();
john_doe.money.value = 100;
const vending_machine = new VendingMachine_1.default();
const espresso = new Coffee_1.default("Espresso");
jim.stock(vending_machine, [espresso]);
let coffee = vending_machine.select(0);
coffee.add_sugar(1);
console.log(`John Doe has ${john_doe.money.value}€`);
const result = vending_machine.order(coffee, john_doe);
if (result)
    console.log(`John Doe has bought a coffee`);
console.log(`Now, John Doe has ${john_doe.money.value}€`);
//# sourceMappingURL=app.js.map