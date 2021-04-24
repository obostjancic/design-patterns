export enum Size {
  TALL,
  GRANDE,
  VENTI,
}

export abstract class Beverage {
  protected size = Size.TALL;
  protected description = 'Unknown Beverage';

  public getSize() {
    return this.size;
  }

  public setSize(size: Size) {
    this.size = size;
  }

  public getDescription() {
    return this.description;
  }

  protected computeSizeCost(baseCost: number) {
    if (this.size === Size.TALL) return baseCost;
    else if (this.size === Size.GRANDE) return baseCost * 1.2;
    else return baseCost * 1.3;
  }

  public abstract cost(): number;
}

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House blend';
  }

  public cost() {
    return this.computeSizeCost(0.89);
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = 'Dark roast';
  }

  public cost() {
    return this.computeSizeCost(0.99);
  }
}

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf';
  }

  public cost() {
    return this.computeSizeCost(1.05);
  }
}

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  public cost() {
    return this.computeSizeCost(1.99);
  }
}
