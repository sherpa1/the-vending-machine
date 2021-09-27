import IStockable from "./IStockable";

export default interface IStock {
  _stock: Array<IStockable>;

  add(item: IStockable);
  remove(item: IStockable);
  flush();
  length(): number;
  getAt(index: number): IStockable;
}
