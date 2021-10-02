import Beverage from "./Beverage";

export default abstract class BeverageWithSugar extends Beverage {
  static readonly MAX_SUGAR = 5;

  private _sugar: number = 0;

  protected get sugar(): number {
    return this._sugar;
  }
  protected set sugar(value: number) {
    if (value === undefined) throw new Error(`value arg must be defined`);

    if (value <= BeverageWithSugar.MAX_SUGAR) this._sugar = value;
    else
      throw new Error(
        `Max sugar's level accepted is ${BeverageWithSugar.MAX_SUGAR} --> ${value} given.`
      );

    console.log(
      `Now, sugar's level is : ${this._sugar}/${BeverageWithSugar.MAX_SUGAR}`
    );
  }

  add_sugar(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);

    if (this._sugar + value <= BeverageWithSugar.MAX_SUGAR)
      this._sugar += value;
    else
      throw new Error(
        `Max sugar's level accepted is ${BeverageWithSugar.MAX_SUGAR} --> ${value} given.`
      );

    console.log(
      `Now, sugar's level is : ${this._sugar}/${BeverageWithSugar.MAX_SUGAR}`
    );
  }

  remove_sugar(value: number) {
    if (value === undefined) throw new Error(`value must be defined`);
    if (this._sugar - value >= 0) this._sugar -= value;
    else
      throw new Error(
        `Minimum sugar's level : 0/${BeverageWithSugar.MAX_SUGAR} --> ${value} given.`
      );
  }
}
