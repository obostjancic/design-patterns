import { MenuItem } from './menu.item';
import { Iterator, PancakeMenuIterator, DinerMenuIterator } from './iterator';

export interface Menu {
  createIterator(): Iterator<MenuItem>;
}

export class PancakeHouseMenu implements Menu {
  private menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem(
      `K&B's pancake breakfast`,
      'Pancakes with scrambled eggs, and toast',
      true,
      2.99
    );

    this.addItem(
      `Regular pancake breakfast`,
      'Pancakes with fried eggs, and sausage',
      false,
      2.99
    );

    this.addItem(
      `Blueberry pancakes`,
      'Pancakes with fresh blueberries',
      true,
      3.49
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.push(new MenuItem(name, description, vegetarian, price));
  }

  public createIterator(): Iterator<MenuItem> {
    return new PancakeMenuIterator(this.menuItems);
  }
}

export class DinerMenu implements Menu {
  private menuItems: Set<MenuItem> = new Set();

  constructor() {
    this.addItem(
      `Vegetarian BLT`,
      'Fake bacon with lettuce & tomato on whole wheat',
      true,
      2.99
    );

    this.addItem(
      `BLT`,
      'bacon with lettuce & tomato on whole wheat',
      false,
      2.99
    );

    this.addItem(
      `Soup of the day`,
      'Soub of the day, with a side of potato salad',
      false,
      3.29
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.add(new MenuItem(name, description, vegetarian, price));
  }

  public createIterator(): Iterator<MenuItem> {
    return new DinerMenuIterator(this.menuItems);
  }
}
