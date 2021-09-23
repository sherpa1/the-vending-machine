"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoffeeFactory_1 = __importDefault(require("./CoffeeFactory"));
class VendingMachine {
    constructor() {
        this.beverages = [];
        const espresso = CoffeeFactory_1.default.make("espresso");
        espresso.price = 1;
        this.beverages.push(espresso);
    }
    select(index) {
        if (index < 0)
            return;
        if (index > this.beverages.length - 1)
            return;
        return this.beverages[index];
    }
    order(beverage, user) {
        return user.pay(beverage.price);
    }
}
exports.default = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map