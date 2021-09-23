import Money from "./Money";

export default class Coin extends Money {
  protected _value: number;

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
}
