import User from "./users/User";
import Beverage from "./beverages/Beverage";
import Resource from "./Resource";
import Coin from "./Coin";
import MaintenanceTechnician from "./users/MaintenanceTechnician";
import Order from "./Order";

export default class VendingMachine {
  private _beverages: Array<Beverage> = [];
  private _water: number = 0;
  private _sugar: number = 0;
  private _cups: number = 0;
  private _coins: Array<Coin> = [];

  add_coin(coin: Coin): void {
    if (coin === undefined) {
      throw new Error(`coin argument must be defined`);
    }

    this._coins.push(coin);
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
      `Vending machine : contains ${this.beverages.length} beverage(s) in stock (added by maintenance technician ${maintenance_technician.firstname} ${maintenance_technician.lastname})`
    );
  }

  add_resource(
    maintenance_technician: MaintenanceTechnician,
    ...resources: Array<Resource>
  ) {
    for (const resource of resources) {
      switch (resource.name) {
        case Resource.SUGAR:
          this._sugar += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._sugar} unity of ${resource.name} (added by maintenance technician ${maintenance_technician.firstname} ${maintenance_technician.lastname})`
          );
          break;
        case Resource.WATER:
          this._water += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._water} unity of ${resource.name} (added by maintenance technician ${maintenance_technician.firstname} ${maintenance_technician.lastname})`
          );
          break;
        case Resource.CUPS:
          this._cups += resource.quantity;
          console.log(
            `Vending Machine : contains ${this._cups} unity of ${resource.name} (added by maintenance technician ${maintenance_technician.firstname} ${maintenance_technician.lastname})`
          );
          break;
      }
    }
  }

  select_beverage(name: string): Beverage {
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

    return selected_beverage;
  }

  order_beverage(order: Order): boolean {
    if (order.user.pay(order.beverage.price)) {
      this._water -= order.beverage.water;
      if (order.with_cup) this._cups -= 1;
      console.log(
        `User : bought ${order.beverage.name} at ${order.beverage.price}€`
      );
      return true;
    } else {
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
