import Water from "./Water";
import Cup from "./Cup";
import Salt from "./Salt";
import Sugar from "./Sugar";

export default abstract class ResourceFactory {
  static readonly WATER: string = "water";
  static readonly CUP: string = "cup";
  static readonly SALT: string = "salt";
  static readonly SUGAR: string = "sugar";

  static readonly KINDS: Array<string> = [
    ResourceFactory.WATER,
    ResourceFactory.SALT,
    ResourceFactory.CUP,
    ResourceFactory.SUGAR,
  ];

  static make(name: string, quantity: number = 10) {
    if (ResourceFactory.KINDS.indexOf(name) === -1) {
      throw new Error(
        `name argument must be defined and be one of this kind ${ResourceFactory.KINDS.join(
          ","
        )}`
      );
    }

    switch (name.toLowerCase()) {
      case ResourceFactory.WATER:
        return new Water(quantity);
      case ResourceFactory.CUP:
        return new Cup(quantity);
      case ResourceFactory.WATER:
        return new Salt(quantity);
      case ResourceFactory.SUGAR:
        return new Sugar(quantity);
      case ResourceFactory.SALT:
        return new Salt(quantity);
      default:
        throw new Error(
          `authorized resource names are ${ResourceFactory.KINDS.join(
            ", "
          )}, ${name} given`
        );
    }
  }
}
