export abstract class CaffeineBeverage {
  // template method - provides high level "algorithm"
  public prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.shouldAddCondiments()) this.addCondiments();
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  private boilWater() {
    console.log('Boiling water');
  }

  private pourInCup() {
    console.log('Pouring into cup');
  }
  // hook - allows subclasses to override behaviour optionally
  protected shouldAddCondiments() {
    return true;
  }
}

export class Coffee extends CaffeineBeverage {
  protected brew() {
    console.log('Dripping coffee through filter');
  }

  protected addCondiments() {
    console.log('Adding Sugar and Milk');
  }

  protected shouldAddCondiments() {
    return true;
  }
}

export class Tea extends CaffeineBeverage {
  protected brew() {
    console.log('Steeping the tea');
  }

  protected addCondiments() {
    console.log('Adding Lemon');
  }

  protected shouldAddCondiments() {
    return false;
  }
}
