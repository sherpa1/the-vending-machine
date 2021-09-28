import User from "./users/User";
import Beverage from "./beverages/Beverage";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _sugar: number = 0;
  private _coins: number = 0;
  private _cups: number = 0;

  add(...new_beverages: Beverage[]): void {
    if (new_beverages === undefined) {
      throw new Error(`beverage must be defined and greater than 0`);
    }

    new_beverages.forEach((beverage) => {
      this._beverages.push(beverage);
    });
    console.log(
      `Now, Vending machine has ${this.beverages.length} beverage(s) in stock`
    );
  }

  select_beverage(name: string): Beverage {
    if (this._beverages.length === 0)
      throw new Error(`Vending Machine is empty`);

    const selected_beverage: Beverage = this._beverages.find(
      (beverage) => beverage.name === name.toLowerCase()
    );

    if (!selected_beverage)
      throw new Error(
        `Vending Machine does not contain a beverage of this kind : ${name}`
      );

    return selected_beverage;
  }

  order_beverage(beverage: Beverage, user: User): boolean {
    if (beverage === undefined) {
      throw new Error(`beverage must be defined`);
    }

    if (user === undefined) {
      throw new Error(`user must be defined`);
    }

    if (this._cups === 0) {
      throw new Error(``);
    }

    if (user.pay(beverage.price)) {
      this._water -= beverage.water;
      this._cups -= 1;
      return true;
    } else {
      return false;
    }
  }

  set cups(value: number) {
    if (value === undefined || value <= 0) {
      throw new Error(`value must be defined and greater than 0`);
    }

    this._cups = value;
  }

  set water(value: number) {
    if (value === undefined || value <= 0) {
      throw new Error(`value must be defined and greater than 0`);
    }

    this._water = value;
  }

  set sugar(value: number) {
    if (value === undefined || value <= 0) {
      throw new Error(`value must be defined and greater than 0`);
    }

    this._sugar = value;
  }

  set coins(value: number) {
    if (value === undefined || value <= 0) {
      throw new Error(`value must be defined and greater than 0`);
    }

    this._coins = value;
  }

  get beverages(): Array<Beverage> {
    return this._beverages;
  }

  get water(): number {
    return this._water;
  }

  get cups(): number {
    return this._cups;
  }

  get coins(): number {
    return this._coins;
  }

  get sugar(): number {
    return this._sugar;
  }
}
