import Beverage from "./Beverage";

export default abstract class SugarBeverage extends Beverage {
  static readonly MAX_SUGAR = 5;

  private _sugar: number = 0;

  protected get sugar(): number {
    return this._sugar;
  }
  protected set sugar(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);

    this._sugar = value;
  }

  add_sugar(quantity: number) {
    if (quantity === undefined) throw new Error(`quantity must be defined`);

    if (this._sugar + quantity <= SugarBeverage.MAX_SUGAR)
      this._sugar += quantity;
    else
      throw new Error(
        `Max sugar's level accepted is ${SugarBeverage.MAX_SUGAR} --> ${quantity} given.`
      );

    console.log(
      `Now, sugar's level is : ${this._sugar}/${SugarBeverage.MAX_SUGAR}`
    );
  }

  remove_sugar(quantity: number) {
    if (quantity === undefined) throw new Error(`quantity must be defined`);
    if (this._sugar - quantity >= 0) this._sugar -= quantity;
    else
      throw new Error(
        `Minimum sugar's level : 0/${SugarBeverage.MAX_SUGAR} --> ${quantity} given.`
      );
    console.log(this._sugar);
  }
}
