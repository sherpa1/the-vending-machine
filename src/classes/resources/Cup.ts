import Resource from "./Resource";

export default class Cup extends Resource {
  constructor(quantity: number = 0) {
    super("cup", quantity);
  }
}
