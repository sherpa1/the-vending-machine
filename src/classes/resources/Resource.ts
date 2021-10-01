export default abstract class Resource {
  protected _name: string;
  protected _quantity: number;

  constructor(name: string, quantity: number = 0) {
    if (name === undefined || name === "")
      throw new Error(`name must be defined and not empty`);

    this._quantity = quantity;
    this._name = name;
  }

  get quantity(): number {
    return this._quantity;
  }
  get name(): string {
    return this._name;
  }
}
