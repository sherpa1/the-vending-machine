import BeverageWithSugar from "./BeverageWithSugar";

export default class Tea extends BeverageWithSugar {
  static readonly MINT: string = "mint";
  static readonly LEMON: string = "lemon";
  static readonly PEACH: string = "peach";

  static readonly KINDS: Array<string> = [Tea.MINT, Tea.LEMON, Tea.PEACH];

  constructor(name: string) {
    if (Tea.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${Tea.KINDS.join(", ")}`
      );
    let price: number = 1.5;
    let water: number = 3;

    super(name, price, water);
  }
}
