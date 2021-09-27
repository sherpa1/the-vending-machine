import Money from "./Money";

export default class Coin extends Money {
  public static AUTHORIZED_VALUES: Array<number> = [1, 0.5, 0.2, 0.1];

  constructor(val: number) {
    if (val === undefined || val <= 0) {
      throw new Error(`val must be defined and greater than 0`);
    }

    if (Coin.AUTHORIZED_VALUES.indexOf(val) === -1)
      throw new Error(
        `Authorized values : ${Coin.AUTHORIZED_VALUES.toString()}`
      );
    else super(val);
  }
}
