import Coin from "./Coin";
import User from "./User";

export default class Customer extends User {
  private _money: Coin;

  constructor() {
    super();
    this._money = new Coin();
  }

  public get money(): Coin {
    return this._money;
  }
  public set money(value: Coin) {
    this._money = value;
  }

  pay(price: number): boolean {
    if (this._money.value >= price) {
      this._money.value -= price;
      return true;
    } else {
      return false;
    }
  }
}
