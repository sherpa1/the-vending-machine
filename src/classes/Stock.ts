import IStock from "./interfaces/IStock";
import IStockable from "./interfaces/IStockable";

export default class Stock<T> implements IStock {
  _stock: IStockable[];

  constructor() {
    this._stock = [];
  }

  add(...items: [IStockable]) {
    items.forEach((element) => {
      this._stock.push(element);
    });
  }

  remove(item: IStockable) {
    let searched_index = -1;

    for (let i = 0; i < this._stock.length; i++) {
      if (item === this._stock[i]) searched_index = i;
    }
  }

  getAt(index: number): IStockable {
    return this._stock[index][0];
  }

  flush() {
    this._stock.splice(0, this._stock.length);
  }

  length(): number {
    return this._stock.length;
  }
}
