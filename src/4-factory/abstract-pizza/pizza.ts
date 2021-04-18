import { PizzaIngredientFactory } from './pizza-ingredient.factory';
import { Dough, Sauce, Cheese, Pepperoni } from './pizza-ingredient';

// The product class hierarchy
export abstract class Pizza {
  protected name: string = '';
  protected dough: Dough = null;
  protected cheese: Cheese = null;
  protected sauce: Sauce = null;
  protected pepperoni: Pepperoni = null;
  protected toppings: string[] = [];

  public abstract prepare(): void;

  public setName(name: string) {
    this.name = name;
  }

  public bake() {
    console.log('Baking for 25 minutes');
  }

  public cut() {
    console.log('Cutting into diagonal slices');
  }

  public box() {
    console.log('Placing pizza in the box');
  }

  protected print(prefix: string, prop: string | null) {
    prop && console.log(`${prefix} ${prop}...`);
  }
}

export class CheesePizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
    this.dough = this.ingredientFactory.createDough();
    this.cheese = this.ingredientFactory.createCheese();
    this.sauce = this.ingredientFactory.createSauce();
    this.toppings = [];
  }

  public prepare() {
    this.print('Preparing', this.name);
    this.print('Tossing', this.dough);
    this.print('Adding', this.sauce);
    this.print('Adding', this.toppings.join(' '));
  }
}

export class PepperoniPizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
    this.dough = this.ingredientFactory.createDough();
    this.cheese = this.ingredientFactory.createCheese();
    this.sauce = this.ingredientFactory.createSauce();
    this.pepperoni = this.ingredientFactory.createPepperoni();
    this.toppings = [];
  }

  public prepare() {
    this.print('Preparing', this.name);
    this.print('Tossing', this.dough);
    this.print('Adding', this.sauce);
    this.print('Adding', this.toppings.join(' '));
  }
}
