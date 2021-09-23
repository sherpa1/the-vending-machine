import Coffee from "./Coffee";

export default abstract class CoffeeFactory {

    static make(name: string): Coffee{
        const coffee = new Coffee(name);
        return coffee;
    }

}