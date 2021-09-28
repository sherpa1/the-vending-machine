export default abstract class Money {
  protected _value: number;

  constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
