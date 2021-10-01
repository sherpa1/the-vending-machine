import IMaintainable from "./interfaces/IMaintainable";

export default class Resource implements IMaintainable {
  _name: string;
  _quantity: number;

  static readonly WATER: string = "water";
  static readonly SUGAR: string = "sugar";
  static readonly SALT: string = "salt";
  static readonly CUPS: string = "cups";

  static readonly KINDS = [
    Resource.WATER,
    Resource.SUGAR,
    Resource.SALT,
    Resource.CUPS,
  ];

  constructor(name: string, quantity: number = 0) {
    if (name === undefined || Resource.KINDS.indexOf(name) === -1)
      throw new Error(
        `Authorized values for name argument are ${Resource.KINDS.join(
          ", "
        )}, "${name}" given`
      );

    if (quantity === undefined)
      throw new Error(`quantity argument must be defined and greater than -1`);

    this._name = name;
    this._quantity = quantity;
  }

  get quantity(): number {
    return this._quantity;
  }
  get name(): string {
    return this._name;
  }
}
