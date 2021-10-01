import BeverageWithSalt from "./BeverageWithSalt";

export default class Soup extends BeverageWithSalt {
  static readonly TOMATOES: string = "tomatoes";
  static readonly GASPACHO: string = "gaspacho";
  static readonly MINESTRONE: string = "minestrone";

  static readonly KINDS: Array<string> = [
    Soup.TOMATOES,
    Soup.GASPACHO,
    Soup.MINESTRONE,
  ];

  constructor(name: string) {
    if (Soup.KINDS.indexOf(name.toLowerCase()) === -1)
      throw new Error(
        `${name} is not one of the allowed values : ${Soup.KINDS.join(", ")}`
      );
    let price: number = 2;
    let water: number = 2;

    if (name.toLowerCase() === Soup.MINESTRONE) price = 2.5;

    super(name, price, water);
  }
}
