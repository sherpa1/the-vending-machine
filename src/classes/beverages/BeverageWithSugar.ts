import Beverage from "./Beverage";

export default abstract class BeverageWithSugar extends Beverage {
  static readonly MAX_SUGAR = 5;

  private _sugar: number = 0;

  protected get sugar(): number {
    return this._sugar;
  }
  protected set sugar(quantity: number) {
    if (quantity === undefined) throw new Error(`quantity arg must be defined`);

    if (quantity <= BeverageWithSugar.MAX_SUGAR) this._sugar = quantity;
    else
      throw new Error(
        `Max sugar's level accepted is ${BeverageWithSugar.MAX_SUGAR} --> ${quantity} given.`
      );

    console.log(
      `Now, sugar's level is : ${this._sugar}/${BeverageWithSugar.MAX_SUGAR}`
    );
  }

  add_sugar(quantity: number) {
    if (quantity === undefined) throw new Error(`quantity must be defined`);

    if (this._sugar + quantity <= BeverageWithSugar.MAX_SUGAR)
      this._sugar += quantity;
    else
      throw new Error(
        `Max sugar's level accepted is ${BeverageWithSugar.MAX_SUGAR} --> ${quantity} given.`
      );

    console.log(
      `Now, sugar's level is : ${this._sugar}/${BeverageWithSugar.MAX_SUGAR}`
    );
  }

  remove_sugar(quantity: number) {
    if (quantity === undefined) throw new Error(`quantity must be defined`);
    if (this._sugar - quantity >= 0) this._sugar -= quantity;
    else
      throw new Error(
        `Minimum sugar's level : 0/${BeverageWithSugar.MAX_SUGAR} --> ${quantity} given.`
      );
  }
}
