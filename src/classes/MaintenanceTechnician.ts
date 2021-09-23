import Beverage from "./Beverage";
import VendingMachine from "./VendingMachine";

export default class MaintenanceTechnician {
  private _firstname: string;
  private _lastname: string;

  constructor(firstname: string, lastname: string) {
    if (firstname === "" || lastname === "")
      throw new Error(
        "Maintenance Technician firstname and lastname must not be empty"
      );

    this._firstname = firstname;
    this._lastname = lastname;
  }

  add(vending_machine: VendingMachine, what: string, quantity: number): void {
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

  stock(vending_machine: VendingMachine, beverages: Beverage[]) {
    vending_machine.stock(beverages);
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }
}
