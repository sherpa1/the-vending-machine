import Coffee from "./Coffee";
import User from "./User";
import CoffeeFactory from "./CoffeeFactory";
import Beverage from "./Beverage";

export default class VendingMachine {
  beverages: Array<Beverage> = [];

  constructor() {
    const espresso: Coffee = CoffeeFactory.make("espresso");
    espresso.price = 1;

    this.beverages.push(espresso);
  }

  select(index: number): Beverage {
    if (index < 0) return;
    if (index > this.beverages.length - 1) return;
    return this.beverages[index];
  }

  order(beverage: Beverage, user: User): boolean {
    return user.pay(beverage.price);
  }
}
