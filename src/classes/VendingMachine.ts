import User from "./users/User";
import Beverage from "./beverages/Beverage";
import Coin from "./Coin";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _cups: number = 0;
  private _coins: Array<Coin> = [];

  static readonly MAX_WATER = 5;
  static readonly MAX_BEVERAGES = 30;

  static readonly WATER = "water";
  static readonly COINS = "coins";

  maintain(what: string, quantity: number): void {
    if (what === undefined || what === "") {
      throw new Error(`what must be defined and not empty 0`);
    }

    if (quantity === undefined || quantity <= 0) {
      throw new Error(`quantity must be defined and greater than 0`);
    }

    switch (what) {
      case VendingMachine.WATER:
        if (this._water + quantity <= VendingMachine.MAX_WATER)
          `Now, Vending Machine water level is ${quantity}`;
        else throw new Error(`Max water level is ${VendingMachine.MAX_WATER}`);
        break;
    }
  }

  stock(new_beverages: Beverage[]): void {
    if (new_beverages === undefined || new_beverages.length === 0) {
      throw new Error(`beverage must be defined and greater than 0`);
    }

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
    if (index === undefined || index < 0)
      throw new Error(`index must defined and greater or equal to 0`);
    if (index > this._beverages.length - 1) return;
    return this._beverages[index];
  }

  order(beverage: Beverage, user: User): boolean {
    if (beverage === undefined) {
      throw new Error(`beverage must be defined`);
    }

    if (user === undefined) {
      throw new Error(`user must be defined`);
    }

    if (user.pay(beverage.price)) {
      this._water -= beverage.water;
      return true;
    } else {
      return false;
    }
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

  public get coins(): Array<Coin> {
    return this._coins;
  }
}
