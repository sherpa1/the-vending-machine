import Money from "../stockables/Money";

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
    const reducer = (prev, current) => prev.value + current.value;

    if (this._money_items.length > 0) {
      const money_sum = this._money_items.reduce(reducer);
      return money_sum.value;
    } else return 0;
  }

  abstract pay(price: number);
}
