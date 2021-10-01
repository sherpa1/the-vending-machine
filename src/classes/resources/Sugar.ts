import Resource from "./Resource";

export default class Sugar extends Resource {
  constructor(quantity: number = 0) {
    super("sugar", quantity);
  }
}
