import Beverage from "../beverages/Beverage";
import IStockable from "../interfaces/IStockable";
import VendingMachine from "../VendingMachine";

export default class MaintenanceTechnician {
  private _firstname: string;
  private _lastname: string;

  constructor(firstname: string, lastname: string) {
    if (
      firstname === "" ||
      lastname === "" ||
      firstname === undefined ||
      lastname === undefined
    )
      throw new Error(
        `Maintenance Technician firstname and lastname must be defined and not empty`
      );

    this._firstname = firstname;
    this._lastname = lastname;
  }

  add(vending_machine: VendingMachine, what: string, quantity: number): void {
    if (vending_machine === undefined) {
      throw new Error(`Vending machine must be defined`);
    }
    if (what === undefined || what === "") {
      throw new Error(`what must be defined`);
    }
    if (quantity === undefined) {
      throw new Error(`Quantity must be defined`);
    }

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

  stock(vending_machine: VendingMachine, ...beverages: IStockable[]) {
    if (vending_machine === undefined) {
      throw new Error(`Vending machine must be defined`);
    }

    if (beverages === undefined || beverages.length === 0) {
      throw new Error(`Beverages must be defined and not empty`);
    }

    beverages.forEach((element) => vending_machine.stock(element));
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set lastname(value: string) {
    if (value === "") {
      throw new Error(`Value must be defined`);
    }
    this._lastname = value;
  }
}
