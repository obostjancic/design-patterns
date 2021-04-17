import { Beverage, Size } from './beverage';

// Classes should be open for extension but closed for modification
export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  // Decorator pattern attaches additional responsibilities to object
  // dynamically, Decorators provide a flexible alternative to subclassing
  // for extending functionality
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  protected computeSizeCost(baseCost: number) {
    if (this.beverage.getSize() === Size.TALL) return baseCost;
    else if (this.beverage.getSize() === Size.GRANDE) return baseCost + 0.05;
    else return baseCost + 0.1;
  }

  getDescription() {
    return 'CondimentDecorator';
  }
}

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return `${this.beverage.getDescription()}, Milk`;
  }

  public cost() {
    return this.beverage.cost() + this.computeSizeCost(0.1);
  }
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  public cost() {
    return this.beverage.cost() + this.computeSizeCost(0.2);
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return `${this.beverage.getDescription()}, Soy`;
  }

  public cost() {
    return this.beverage.cost() + this.computeSizeCost(0.15);
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage);
  }

  public getDescription() {
    return `${this.beverage.getDescription()}, Whip`;
  }

  public cost() {
    return this.beverage.cost() + this.computeSizeCost(0.1);
  }
}
