import User from "./User";

export default class Customer extends User {
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

        return false;
      }
    } else {
      console.log(`Customer can't pay: ${price}€`);
      return false;
    }
  }
}
