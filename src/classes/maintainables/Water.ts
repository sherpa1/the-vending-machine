import Maintainable from "../interfaces/IMaintainable";

export default class Water implements Maintainable {
  private _quantity: number;
  private _name: string = "water";
  private _max_quantity: number = 100;

  quantity(): number {
    return this._quantity;
  }
  name(): string {
    return this._name;
  }
  max_quantity(): number {
    return this._max_quantity;
  }
  add(quantity: number) {
    if (quantity === undefined || quantity <= 0) {
      throw new Error(`max quantiy is ${this._max_quantity}`);
    }

    if (quantity + this._quantity > this.max_quantity())
      throw new Error(
        `quantity must be lower than ${this._quantity}, ${quantity} given`
      );
    this._quantity -= quantity;

    this._quantity += quantity;
  }
  remove(quantity: number) {
    if (quantity === undefined || quantity <= 0) {
      throw new Error(`quantity must be defined and greater than 0`);
    }

    if (quantity > this._quantity)
      throw new Error(
        `quantity must be lower than ${this._quantity}, ${quantity} given`
      );
    this._quantity -= quantity;
  }
}
