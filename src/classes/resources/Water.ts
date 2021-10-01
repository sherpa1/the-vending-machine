import Resource from "./Resource";

export default class Water extends Resource {
  constructor(quantity: number = 0) {
    super("water", quantity);
  }
}
