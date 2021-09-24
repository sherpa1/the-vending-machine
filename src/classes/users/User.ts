export default abstract class User {
  protected _firstname: string;
  protected _lastname: string;

  constructor(firstname: string, lastname: string) {
    if (firstname === "" || lastname === "")
      throw new Error(`USer firstname and lastname must not be empty`);

    this._firstname = firstname;
    this._lastname = lastname;
  }

  abstract pay(price: number);
}
