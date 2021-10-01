import Resource from "./Resource";

export default abstract class ResourceFactory {
  static make(name: string, quantity: number = 10) {
    if (Resource.KINDS.indexOf(name) === -1) {
      throw new Error(
        `name argument must be defined and be one of this kind ${Resource.KINDS.join(
          ","
        )}`
      );
    }

    return new Resource(name, quantity);
  }
}
