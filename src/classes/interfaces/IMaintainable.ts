export default interface Maintainable {
  quantity(): number;
  name(): string;
  max_quantity(): number;
  add(quantity: number);
  remove(quantity: number);
}
