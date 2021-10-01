import Resource from "./Resource";

export default class Salt extends Resource {
  constructor(quantity: number = 0) {
    super("salt", quantity);
  }
}
