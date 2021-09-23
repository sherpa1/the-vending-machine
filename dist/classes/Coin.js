"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = __importDefault(require("./Money"));
class Coin extends Money_1.default {
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.default = Coin;
//# sourceMappingURL=Coin.js.map