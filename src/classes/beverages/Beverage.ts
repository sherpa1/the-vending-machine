import IStockable from "../interfaces/IStockable";

export default abstract class Beverage implements IStockable {
  protected _name: string;
  protected _volume: number;
  protected _price: number;
  private _water: number = 0;
  public get water(): number {
    return this._water;
  }

  constructor(name: string, price: number, water: number = 0) {
    if (name === undefined || name === "")
      throw new Error(`name must be defined and not empty`);
    if (water === undefined) throw new Error(`water must be defined`);
    if (price === undefined || price <= 0)
      throw new Error(`price must be defined and greater than 0`);

    this._name = name;
    this._water = water;
    this._price = price;
  }

  name(): string {
    return this._name;
  }

  max_quantity(): number {
    return 0;
  }

  protected get volume(): number {
    return this._volume;
  }

  protected set volume(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);

    this._volume = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);
    this._price = value;
  }
}
