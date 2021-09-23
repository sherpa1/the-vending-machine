"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = __importDefault(require("./Coffee"));
class CoffeeFactory {
    static make(name) {
        const coffee = new Coffee_1.default(name);
        return coffee;
    }
}
exports.default = CoffeeFactory;
//# sourceMappingURL=CoffeeFactory.js.map