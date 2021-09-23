"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = __importDefault(require("./Beverage"));
class Coffee extends Beverage_1.default {
    constructor(name) {
        super(name);
        this._sugar = 0; //min 0 / max 5
    }
    add_sugar(quantity) {
        if (this._sugar + quantity <= 5)
            this._sugar += quantity;
        else
            throw new Error(`Max sugar quantity accepted : 5 --> ${quantity} given.`);
        console.log(`adding ${quantity} to Sugar (${this._sugar})`);
    }
    remove_sugar(quantity) {
        if (this._sugar - quantity >= 0)
            this._sugar -= quantity;
        else
            throw new Error("Minimum sugar quantity : 0");
        console.log(this._sugar);
    }
}
exports.default = Coffee;
//# sourceMappingURL=Coffee.js.map