"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coin_1 = __importDefault(require("./Coin"));
const User_1 = __importDefault(require("./User"));
class Customer extends User_1.default {
    constructor() {
        super();
        this._money = new Coin_1.default();
    }
    get money() {
        return this._money;
    }
    set money(value) {
        this._money = value;
    }
    pay(price) {
        if (this._money.value >= price) {
            this._money.value -= price;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map