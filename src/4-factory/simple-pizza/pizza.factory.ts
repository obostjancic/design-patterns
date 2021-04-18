import { CheesePizza, Pizza, PepperoniPizza } from './pizza';

export interface PizzaFactory {
  createPizza(type: string): Pizza;
}

// Factory method = Defines an interface for creating an object, but let
// subclasses decide which class to instantiate. Factory method lets a class
// defer instantiation to the subclasses
export class SimplePizzaFactory implements PizzaFactory {
  public createPizza(type: string): Pizza {
    if (type === 'cheese') return new CheesePizza();
    else if (type === 'pepperoni') return new PepperoniPizza();
    else throw new Error('Unknown pizza type');
  }
}
