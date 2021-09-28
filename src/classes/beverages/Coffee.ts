import BeverageWithSugar from "./BeverageWithSugar";

export default class Coffee extends BeverageWithSugar {
  static readonly ESPRESSO: string = "espresso";
  static readonly MACCHIATO: string = "macchiato";
  static readonly RISTRETTO: string = "ristretto";
  static readonly CAPPUCCINO: string = "cappuccino";
  static readonly LUNGO: string = "lungo";
  static readonly AMERICANO: string = "americano";

  static readonly KINDS: Array<string> = [
    Coffee.ESPRESSO,
    Coffee.MACCHIATO,
    Coffee.RISTRETTO,
    Coffee.CAPPUCCINO,
    Coffee.LUNGO,
    Coffee.AMERICANO,
  ];

  constructor(name: string) {
    if (Coffee.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${Coffee.KINDS.join(", ")}`
      );
    let price: number = 1;
    let water: number = 1;

    if (
      name.toLowerCase() === Coffee.LUNGO ||
      name.toLowerCase() === Coffee.AMERICANO
    )
      water = 2;

    super(name, price, 1);
  }
}
