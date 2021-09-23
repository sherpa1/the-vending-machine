"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beverage {
    constructor(name) {
        this.name = name;
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
        this._volume = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
exports.default = Beverage;
//# sourceMappingURL=Beverage.js.map