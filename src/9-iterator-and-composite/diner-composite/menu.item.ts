import { NullIterator, Iterator } from './iterator';
import { MenuComponent } from './menu.component';

export class MenuItem extends MenuComponent {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public isVegetarian() {
    return this.vegetarian;
  }

  public getPrice() {
    return this.price;
  }

  public createIterator(): Iterator<MenuComponent> {
    return new NullIterator<MenuComponent>();
  }

  public print() {
    console.log(
      `${this.getName()} ${
        this.isVegetarian() ? '(v)' : ''
      }, ${this.getPrice()}  --  ${this.getDescription()}`
    );
  }
}
