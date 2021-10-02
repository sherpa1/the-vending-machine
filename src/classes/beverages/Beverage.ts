export default abstract class Beverage {
  protected _limit: number;
  protected _value: number;
  protected _name: string;
  protected _price: number;
  private _water: number = 0;

  constructor(name: string, price: number, water: number = 0) {
    if (name === undefined || name === "")
      throw new Error(`name must be defined and not empty`);
    if (water === undefined || water <= 0)
      throw new Error(`water must be defined and greater than 0`);
    if (price === undefined || price <= 0)
      throw new Error(`price must be defined and greater than 0`);

    this._name = name;
    this._water = water;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get limit(): number {
    return this._limit;
  }

  get value(): number {
    return this._value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);
    this._price = value;
  }

  get water(): number {
    return this._water;
  }
}
