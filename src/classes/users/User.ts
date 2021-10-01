import Money from "../Money";
import People from "../People";

export default abstract class User extends People {
  protected _money_items: Array<Money>;

  constructor(
    firstname: string,
    lastname: string,
    money_items: Array<Money> = []
  ) {
    super(firstname, lastname, 0);
    this._money_items = money_items;
  }

  public get money_items(): Array<Money> {
    return this._money_items;
  }

  public add_money_item(...money: Array<Money>): void {
    if (money === undefined) throw new Error(`money argument must be defined`);

    for (const m of money) {
      this._money_items.push(m);
    }

    console.log(`User : budget is ${this.budget}€`);
  }

  public remove_money_item(money: Money) {
    if (money === undefined) throw new Error(`money argument must be defined`);

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
