import Beverage from "./beverages/Beverage";
import Resource from "./resources/Resource";
import ResourceFactory from "./resources/ResourceFactory";
import User from "./users/User";
import BeverageWithSugar from "./beverages/BeverageWithSugar";
import BeverageWithSalt from "./beverages/BeverageWithSalt";

export default class Order {
  private _beverage: Beverage;
  private _sugar: Resource;
  private _salt: Resource;
  private _with_cup: boolean = true;
  private _user: User;

  static CANCELED: number = -1;
  static DOING: number = 0;
  static DONE: number = 1;
  static STATUSES: Array<number> = [Order.CANCELED, Order.DOING, Order.DONE];

  private _status: number = Order.DOING;

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
      //by default, no sugar
      this._sugar = ResourceFactory.make(ResourceFactory.SUGAR, 0);
    else this._sugar = sugar_arg;

    if (this._beverage instanceof BeverageWithSalt)
      this._sugar = ResourceFactory.make(ResourceFactory.SUGAR, 0); //sugar is not compatible with BeverageWithSalt

    if (salt_arg === undefined)
      //by default, no salt
      this._salt = ResourceFactory.make(ResourceFactory.SALT, 0);
    else this._salt = salt_arg;

    if (this._beverage instanceof BeverageWithSugar)
      this._salt = ResourceFactory.make(ResourceFactory.SALT, 0); //salt is not compatible with BeverageWithSugar

    if (with_cup_arg === undefined) this._with_cup = true;
    else this._with_cup = with_cup_arg;

    this._status = Order.DOING;
    console.log(`Order : doing (${this.toString()})`);
  }

  public toString(): string {
    return `name : ${this._beverage.name}, price : ${this._beverage.price}, sugar : ${this._sugar.quantity}, salt : ${this._salt.quantity}, with cup : ${this._with_cup}`;
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

  public get status(): number {
    return this._status;
  }

  public cancel(): void {
    if (this._status === Order.DOING) {
      console.log(`Order : canceled`);
      this._status = Order.CANCELED;
    } else {
      if (this._status === Order.DONE)
        throw new Error(
          `Order can't be canceled as its status is already done`
        );
      else if (this._status === Order.CANCELED)
        throw new Error(
          `Order can't be canceled as its status is already canceled`
        );
      else
        throw new Error(
          `Order can't be canceled as its status has never been defined before`
        );
    }
  }

  public validate(): void {
    if (this._status === Order.DOING) {
      console.log(`Order : done`);
      this._status = Order.DONE;
    } else {
      if (this._status === Order.DONE)
        throw new Error(
          `Order can't be validated as its status is already done`
        );
      else if (this._status === Order.CANCELED)
        throw new Error(
          `Order can't be validated as its status is already canceled`
        );
      else
        throw new Error(
          `Order can't be validated as its status has never been defined before`
        );
    }
  }
}
