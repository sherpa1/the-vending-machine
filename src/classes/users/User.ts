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

  public remove_money_item(money: Money): boolean {
    if (money === undefined) throw new Error(`money must be defined`);

    // for (let i = 0; i < this._money_items.length; i++) {
    //   const money: Money = this._money_items[i];

    //   if (money.value === money.value) {
    //     this._money_items.splice(i, 1);
    //     return true;
    //   }
    // }

    const found = this._money_items.find(
      (element) => element.value === money.value
    );

    console.log(found);

    // if (found) {
    //   this._money_items.splice(i, 1);
    //   return true;
    // }
    return false;
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
