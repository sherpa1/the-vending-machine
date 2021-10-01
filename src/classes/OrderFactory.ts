import User from "./users/User";
import Order from "./Order";
import Resource from "./resources/Resource";
import Beverage from "./beverages/Beverage";

export default abstract class OrderFactory {
  static make(
    user: User,
    beverage: Beverage,
    sugar?: Resource,
    salt?: Resource,
    with_cup: boolean = false
  ): Order {
    return new Order(user, beverage, sugar, salt, with_cup);
  }
}
