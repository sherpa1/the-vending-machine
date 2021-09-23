import Beverage from "./Beverage";

export default class Coffee extends Beverage {
  private _sugar: number;

  constructor(name: string) {
    super(name);
    this._sugar = 0; //min 0 / max 5
  }

  add_sugar(quantity: number) {
    if (this._sugar + quantity <= 5) this._sugar += quantity;
    else
      throw new Error(`Max sugar quantity accepted : 5 --> ${quantity} given.`);

    console.log(`adding ${quantity} to Sugar (${this._sugar})`);
  }

  remove_sugar(quantity: number) {
    if (this._sugar - quantity >= 0) this._sugar -= quantity;
    else throw new Error("Minimum sugar quantity : 0");
    console.log(this._sugar);
  }
}
