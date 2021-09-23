"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoffeeFactory_1 = __importDefault(require("../classes/CoffeeFactory"));
class Distributor {
    constructor() {
        this.coffees = [];
        const espresso = CoffeeFactory_1.default.make("espresso");
        espresso.price = 1;
        this.coffees.push(espresso);
    }
    select(index) {
        if (index < 0)
            return;
        if (index > this.coffees.length - 1)
            return;
        return this.coffees[index];
    }
    order(coffee, user) {
        return user.pay(coffee.price);
    }
}
exports.default = Distributor;
//# sourceMappingURL=Distributor.js.map