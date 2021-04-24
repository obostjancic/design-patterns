import { Pizza } from './pizza';
import { PizzaFactory } from './pizza.factory';

export class PizzaStore {
  private factory: PizzaFactory;

  constructor(factory: PizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string) {
    const pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
