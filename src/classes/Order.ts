import Beverage from "./beverages/Beverage";
import Resource from "./Resource";
import ResourceFactory from "./ResourceFactory";
import User from "./users/User";

export default class Order {
  private _beverage: Beverage;
  private _sugar: Resource;
  private _salt: Resource;
  private _with_cup: boolean = true;
  private _user: User;

  constructor(
    user: User,
    beverage_arg: Beverage,
    sugar_arg?: Resource,
    salt_arg?: Resource,
    with_cup_arg?: boolean
  ) {
    if (user === undefined) throw new Error(`user argument must be defined`);
    this._user = user;

    if (beverage_arg === undefined)
      throw new Error(`beverage argument must be defined`);
    this._beverage = beverage_arg;

    if (sugar_arg === undefined)
      this._sugar = ResourceFactory.make(Resource.SUGAR, 0);
    //by default, no sugar
    else this._sugar = sugar_arg;

    if (salt_arg === undefined)
      this._salt = ResourceFactory.make(Resource.SALT, 0);
    //by default, no salt
    else this._salt = salt_arg;

    if (with_cup_arg === undefined) this._with_cup = true;
    else this._with_cup = with_cup_arg;
  }

  public get user(): User {
    return this._user;
  }

  public get sugar(): Resource {
    return this._sugar;
  }
  public set sugar(value: Resource) {
    this._sugar = value;
  }

  public get beverage(): Beverage {
    return this._beverage;
  }
  public set beverage(value: Beverage) {
    this._beverage = value;
  }
  public get with_cup(): boolean {
    return this._with_cup;
  }
  public set with_cup(value: boolean) {
    this._with_cup = value;
  }
  public get salt(): Resource {
    return this._salt;
  }
  public set salt(value: Resource) {
    this._salt = value;
  }
}