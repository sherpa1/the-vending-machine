import User from "./User";
import Money from "../stockables/Money";

export default class Customer extends User {
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
        `Customer firstname and lastname must be defined and not empty`
      );

    super(firstname, lastname, money_items);
  }

  pay(price: number): boolean {
    if (price === undefined || price <= 0)
      throw new Error(`price must be defined and greater than 0`);

    if (this.budget >= price) {
      if (this.budget === price) {
        this._money_items = [];
        console.log(`Now, Customer's budget is 0€`);
        return true;
      } else {
        const found = this._money_items.find(
          (element) => element.value === price
        );

        if (found) {
          console.log(found);
        }

        return false;
      }
    } else {
      console.log(`Customer can't pay: ${price}€`);
      return false;
    }
  }
}
