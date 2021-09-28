import Money from "./Money";

export default class Chip extends Money {
  static readonly AUTHORIZED_VALUES = [1, 2, 0.1, 0.2, 0.5];

  constructor() {
    super(1);
  }
}
