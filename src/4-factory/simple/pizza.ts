export abstract class Pizza {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public prepare() {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings...');
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
}

export class CheesePizza extends Pizza {
  constructor() {
    super('Cheese pizza');
  }
}

export class PepperoniPizza extends Pizza {
  constructor() {
    super('Pepperoni pizza');
  }
}
