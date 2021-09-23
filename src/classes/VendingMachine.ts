import Coffee from "./Coffee";
import User from "./User";
import CoffeeFactory from "./CoffeeFactory";
import Beverage from "./Beverage";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _cups: number = 0;

  constructor() {}

  maintain(what: string, quantity: number): void {
    switch (what) {
      case "water":
        if (this._water + quantity <= 5)
          `Now, Vending Machine water level is : ${quantity}`;
        else throw new Error(`Max water level is 5`);
        break;
    }
  }

  stock(new_beverages: Beverage[]): void {
    if (this._beverages.length + new_beverages.length <= 30) {
      this._beverages = this._beverages.concat(new_beverages);
      console.log(
        `Now, Vending machine has ${this.beverages.length} beverage(s) in stock`
      );
    } else throw new Error(`Max beverages stock is 30`);
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
