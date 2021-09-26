import User from "./User";

export default class Staff extends User {
  pay(price: number) {
    if (price === undefined || price === 0) {
      throw new Error(`price must be defined and greater than 0`);
    }
    throw new Error("Method not implemented.");
  }
}
