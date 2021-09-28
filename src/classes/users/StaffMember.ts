import User from "./User";

export default class StaffMember extends User {
  pay(price: number): boolean {
    if (price === undefined || price <= 0)
      throw new Error(`price must be defined and greater than 0`);

    if (this._money_items.length) {
      this._money_items.splice(0, 1); //remove abitrary 1 chip
    } else {
      console.log(`Member Staff has no more chip`);
      return false;
    }
  }
}
