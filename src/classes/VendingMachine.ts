import Beverage from "./beverages/Beverage";
import ResourceFactory from "./resources/ResourceFactory";
import Resource from "./resources/Resource";
import Coin from "./Coin";
import MaintenanceTechnician from "./users/MaintenanceTechnician";
import Order from "./Order";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _sugar: number = 0;
  private _cups: number = 0;
  private _milk: number = 0;
  private _coins: Array<Coin> = [];
  private _current_order: Order = null;
  private _orders: Array<Order> = [];

  add_coin(...coins: Array<Coin>): void {
    if (coins === undefined) {
      throw new Error(`coin argument must be defined`);
    }

    for (const coin of coins) {
      this._coins.push(coin);
    }
  }

  add_beverage(
    maintenance_technician: MaintenanceTechnician,
    ...beverages: Beverage[]
  ): void {
    if (beverages === undefined) {
      throw new Error(`beverage argument must be defined and greater than 0`);
    }

    beverages.forEach((beverage) => {
      this._beverages.push(beverage);
    });
    console.log(
      `Vending machine : contains ${this.beverages.length} beverage(s) in stock (added by maintenance technician ${maintenance_technician.fullname})`
    );
  }

  add_resource(
    maintenance_technician: MaintenanceTechnician,
    ...resources: Array<Resource>
  ) {
    for (const resource of resources) {
      switch (resource.name) {
        case ResourceFactory.SUGAR:
          this._sugar += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._sugar} unities of ${resource.name} (added by maintenance technician ${maintenance_technician.fullname})`
          );
          break;
        case ResourceFactory.WATER:
          this._water += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._water} unities of ${resource.name} (added by maintenance technician ${maintenance_technician.fullname})`
          );
          break;
        case ResourceFactory.CUP:
          this._cups += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._cups} unities of ${resource.name} (added by maintenance technician ${maintenance_technician.fullname})`
          );
          break;
        case ResourceFactory.MILK:
          this._milk += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._milk} unities of ${resource.name} (added by maintenance technician ${maintenance_technician.fullname})`
          );
          break;
      }
    }
  }

  select(name: string): Beverage {
    if (this._coins.length === 0)
      console.warn(`Vending Machine : at the moment, can not give change`);

    if (this._cups === 0) {
      console.warn(`Vending Machine : at the moment, does not contain any cup`);
    }

    if (this._sugar === 0) {
      console.warn(
        `Vending Machine : at the moment, does not contain any sugar`
      );
    }

    if (this.water === 0) {
      throw new Error(
        `Vending Machine : at the moment, does not contain any water`
      );
    }

    if (this._beverages.length === 0)
      throw new Error(`Vending Machine : is empty`);

    const selected_beverage: Beverage = this._beverages.find(
      (beverage) => beverage.name === name.toLowerCase()
    );

    if (!selected_beverage)
      throw new Error(
        `Vending Machine : does not contain a beverage of this kind : ${name}`
      );

    console.log(
      `Vending Machine : ${
        selected_beverage.name
      } selected (${selected_beverage.toString()})`
    );

    return selected_beverage;
  }

  order(order: Order) {
    console.log(
      `Vending Machine : ${order.beverage.name} ordered by ${order.user.fullname}`
    );

    if (
      this._current_order !== null &&
      this._current_order.status === Order.DOING
    ) {
      this._current_order.cancel();
    }

    this._current_order = order;
    this._orders.push(order); //Vending Machine keeps each order in memory
  }

  pay(): boolean {
    if (this._current_order === undefined || this._current_order === null) {
      throw new Error(`There is no order to pay`);
    }

    if (this._current_order.user.pay(this._current_order.beverage.price)) {
      this._water -= this._current_order.beverage.water;
      if (this._current_order.with_cup) this._cups -= 1;

      this._current_order.validate();
      this._current_order = null;
      return true;
    } else {
      this._current_order.cancel();
      return false;
    }
  }

  get beverages(): Array<Beverage> {
    return this._beverages;
  }

  get water(): number {
    return this._water;
  }

  get cups(): number {
    return this._cups;
  }

  get coins(): Array<Coin> {
    return this._coins;
  }

  get sugar(): number {
    return this._sugar;
  }
}
