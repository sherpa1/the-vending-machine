import User from "./users/User";
import Beverage from "./beverages/Beverage";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _cups: number = 0;

  static readonly MAX_WATER = 5;
  static readonly MAX_BEVERAGES = 30;

  constructor() {}

  maintain(what: string, quantity: number): void {
    switch (what) {
      case "water":
        if (this._water + quantity <= VendingMachine.MAX_WATER)
          `Now, Vending Machine water level is ${quantity}`;
        else throw new Error(`Max water level is ${VendingMachine.MAX_WATER}`);
        break;
    }
  }

  stock(new_beverages: Beverage[]): void {
    if (
      this._beverages.length + new_beverages.length <=
      VendingMachine.MAX_BEVERAGES
    ) {
      this._beverages = this._beverages.concat(new_beverages);
      console.log(
        `Now, Vending machine has ${this.beverages.length} beverage(s) in stock`
      );
    } else
      throw new Error(`Max beverages stock is ${VendingMachine.MAX_BEVERAGES}`);
  }

  select(index: number): Beverage {
    if (index < 0) return;
    if (index > this._beverages.length - 1) return;
    return this._beverages[index];
  }

  order(beverage: Beverage, user: User): boolean {
    return user.pay(beverage.price);
  }

  public get beverages(): Array<Beverage> {
    return this._beverages;
  }

  public get water(): number {
    return this._water;
  }

  public get cups(): number {
    return this._cups;
  }
}
