import Money from "./Money";

export default abstract class User {
  abstract pay(price: number);
}
