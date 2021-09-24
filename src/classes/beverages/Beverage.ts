export default abstract class Beverage {
  protected name: string;
  protected _volume: number;
  protected _price: number;

  constructor(name: string) {
    this.name = name;
  }

  protected get volume(): number {
    return this._volume;
  }
  protected set volume(value: number) {
    this._volume = value;
  }

  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}
