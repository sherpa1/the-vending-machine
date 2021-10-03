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
    let milk: number = 0;

    if (
      name.toLowerCase() === Coffee.LUNGO ||
      name.toLowerCase() === Coffee.AMERICANO
    ) {
      water = 2;
      price = 2;
    }

    if (name.toLowerCase() === Coffee.CAPPUCCINO) {
      price = 2;
      milk = 1;
    }

    super(name, price, water);
  }
}
