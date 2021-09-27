import IStockable from "../interfaces/IStockable";

export default abstract class Money implements IStockable {
  private _value: number;

  constructor(val: number) {
    if (val === undefined || val <= 0)
      throw new Error(`val must be defined and greater than 0`);
    if (val > this.max_quantity())
      throw new Error(`Max quantity is ${this.max_quantity()}`);
    this._value = val;
  }

  max_quantity(): number {
    return 100;
  }

  name(): string {
    return "Money";
  }

  public get value(): number {
    return this._value;
  }
  public set value(val: number) {
    if (val === undefined || val <= 0)
      throw new Error(`val must be defined and greater than 0`);
    this._value = val;
  }
}
