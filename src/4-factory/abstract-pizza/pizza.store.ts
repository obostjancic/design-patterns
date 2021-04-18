import { Pizza, CheesePizza, PepperoniPizza } from './pizza';
import {
  NYPizzaIngredientFactory,
  ChicagoPizzaIngredientFactory,
} from './pizza-ingredient.factory';

// Abstract factory - Provides an interface for creating families of related or
// dependent objects without specifying their concrete classes
export abstract class PizzaStore {
  public orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  public abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    const ingredientFactory = new NYPizzaIngredientFactory();
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('NY Style Cheese Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('NY Style Pepperoni Pizza');
    } else throw new Error('Unknown pizza type');

    return pizza;
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza {
    const ingredientFactory = new ChicagoPizzaIngredientFactory();
    let pizza: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('Chicago Style Cheese Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('Chicago Style Pepperoni Pizza');
    } else throw new Error('Unknown pizza type');

    return pizza;
  }
}
