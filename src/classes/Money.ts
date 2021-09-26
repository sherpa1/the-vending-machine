export default abstract class Money {
  private _value: number;

  constructor(val: number) {
    if (val === undefined || val <= 0)
      throw new Error(`val must be defined and greater than 0`);
    this._value = val;
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
