import { Dough, Sauce, Cheese, Pepperoni } from './pizza-ingredient';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createPepperoni(): Pepperoni;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return 'Thin Crust Dough';
  }

  createSauce(): Sauce {
    return 'Marinara Sauce';
  }

  createCheese(): Cheese {
    return 'Grated Reggiano Cheese';
  }

  createPepperoni(): Pepperoni {
    return 'Sliced Pepperoni';
  }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return 'Extra Thick Crust Dough';
  }

  createSauce(): Sauce {
    return 'Plum Tomato Sauce';
  }

  createCheese(): Cheese {
    return 'Shredded Mozzarella Cheese';
  }

  createPepperoni(): Pepperoni {
    return 'Sliced Pepperoni';
  }
}
