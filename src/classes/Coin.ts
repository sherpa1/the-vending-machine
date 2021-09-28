import Money from "./Money";

export default class Coin extends Money {
  static readonly AUTHORIZED_VALUES = [1, 2, 0.1, 0.2, 0.5];

  constructor(value: number) {
    super(value);
    if (Coin.AUTHORIZED_VALUES.indexOf(value) === -1) {
      throw new Error(
        `Authorized values are : ${Coin.AUTHORIZED_VALUES.toString()}`
      );
    }
  }
}
