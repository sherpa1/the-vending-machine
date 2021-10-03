import Resource from "./Resource";

export default class Milk extends Resource {
  constructor(quantity: number = 0) {
    super("milk", quantity);
  }
}
