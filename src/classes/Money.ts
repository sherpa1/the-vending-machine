export default abstract class Money {
  protected _value: number;

  constructor(value: number) {
    if (value === undefined || value <= 0)
      throw new Error(`value argument must be defined and greater than 0`);
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
