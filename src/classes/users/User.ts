import Money from "../Money";

export default abstract class User {
  protected _firstname: string;
  protected _lastname: string;
  protected _money_items: Array<Money>;

  constructor(
    firstname: string,
    lastname: string,
    money_items: Array<Money> = []
  ) {
    if (
      firstname === "" ||
      lastname === "" ||
      firstname === undefined ||
      lastname === undefined
    )
      throw new Error(
        `User firstname and lastname must be defined and not empty`
      );

    this._firstname = firstname;
    this._lastname = lastname;
    this._money_items = money_items;
  }

  public get money_items(): Array<Money> {
    return this._money_items;
  }

  public add_money_item(money: Money): void {
    if (money === undefined) throw new Error(`money must be defined`);

    this._money_items.push(money);
  }

  public remove_money_item(money: Money) {
    if (money === undefined) throw new Error(`money must be defined`);

    this._money_items = this._money_items.filter(
      (item) => item.value === money.value
    );
  }

  public get budget() {
    let sum = 0;

    if (this._money_items.length > 0) {
      for (const a_money_item of this._money_items) {
        sum += a_money_item.value;
      }
    }

    return sum;
  }

  abstract pay(price: number);
}
