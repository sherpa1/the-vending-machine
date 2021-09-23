"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VendingMachine {
    constructor() {
        this._beverages = [];
        this._water = 0;
        this._cups = 0;
    }
    maintain(what, quantity) {
        switch (what) {
            case "water":
                if (this._water + quantity <= 5)
                    `Now, Vending Machine water level is : ${quantity}`;
                else
                    throw new Error(`Max water level is 5`);
                break;
        }
    }
    stock(new_beverages) {
        if (this._beverages.length + new_beverages.length <= 30)
            this._beverages.concat(new_beverages);
        else
            throw new Error(`Max beverages stock is 30`);
    }
    select(index) {
        if (index < 0)
            return;
        if (index > this._beverages.length - 1)
            return;
        return this._beverages[index];
    }
    order(beverage, user) {
        return user.pay(beverage.price);
    }
    get beverages() {
        return this._beverages;
    }
    get water() {
        return this._water;
    }
    get cups() {
        return this._cups;
    }
}
exports.default = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map