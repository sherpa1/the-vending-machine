import Beverage from "./Beverage";

export default abstract class BeverageWithSalt extends Beverage {
  static readonly MAX_SALT = 5;

  private _salt: number = 0;

  protected get salt(): number {
    return this._salt;
  }
  protected set salt(value: number) {
    if (value === undefined) throw new Error(`value arg must be defined`);

    if (value <= BeverageWithSalt.MAX_SALT) this._salt = value;
    else
      throw new Error(
        `Max salt's level accepted is ${BeverageWithSalt.MAX_SALT} --> ${value} given.`
      );

    console.log(
      `Now, salt's level is : ${this._salt}/${BeverageWithSalt.MAX_SALT}`
    );
  }

  add_salt(value: number) {
    if (value === undefined) throw new Error(`value arg must be defined`);

    if (this._salt + value <= BeverageWithSalt.MAX_SALT) this._salt += value;
    else
      throw new Error(
        `Max salt's level accepted is ${BeverageWithSalt.MAX_SALT} --> ${value} given.`
      );

    console.log(
      `Now, salt's level is : ${this._salt}/${BeverageWithSalt.MAX_SALT}`
    );
  }

  remove_salt(value: number) {
    if (value === undefined) throw new Error(`value arg must be defined`);
    if (this._salt - value >= 0) this._salt -= value;
    else
      throw new Error(
        `Minimum salt's level : 0/${BeverageWithSalt.MAX_SALT} --> ${value} given.`
      );
  }
}
