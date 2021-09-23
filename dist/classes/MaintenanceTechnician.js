"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MaintenanceTechnician {
    constructor(firstname, lastname) {
        if (firstname === "" || lastname === "")
            throw new Error("Maintenance Technician firstname and lastname must not be empty");
        this._firstname = firstname;
        this._lastname = lastname;
    }
    add(vending_machine, what, quantity) {
        switch (what) {
            case "water":
                vending_machine.maintain(what, quantity);
                console.log(`Maintenance Technician: adds ${what}`);
                break;
            default:
                console.log(`Maintenance Technician: adds ${what}`);
                break;
        }
    }
    stock(vending_machine, beverages) {
        vending_machine.stock(beverages);
    }
    get firstname() {
        return this._firstname;
    }
    set lastname(value) {
        this._lastname = value;
    }
}
exports.default = MaintenanceTechnician;
//# sourceMappingURL=MaintenanceTechnician.js.map