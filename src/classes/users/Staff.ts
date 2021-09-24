import User from "./User";

export default class Staff extends User {
  pay(price: number) {
    throw new Error("Method not implemented.");
  }
}
