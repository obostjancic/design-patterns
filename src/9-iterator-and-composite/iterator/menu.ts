import { MenuItem } from './menu.item';
import {
  Iterator,
  PancakeMenuIterator,
  DinerMenuIterator,
  CafeMenuIterator,
} from './iterator';

export interface Menu {
  name: string;
  description: string;
  createIterator(): Iterator<MenuItem>;
}

export class PancakeHouseMenu implements Menu {
  name: string = 'PANCAKE HOUSE MENU';
  description: string = 'Breakfast';
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
  name: string = 'DINER MENU';
  description: string = 'Lunch';
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
      'Soup of the day, with a side of potato salad',
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

export class CafeMenu implements Menu {
  name: string = 'CAFE MENU';
  description: string = 'Dinner';
  private menuItems: Map<string, MenuItem> = new Map();

  constructor() {
    this.addItem(
      `Veggie burger and Air Fries`,
      'Veggie burger on a whole wheat bun. lettuce, tomato and fries',
      true,
      3.99
    );

    this.addItem(
      `Soup of the day`,
      'Soup of the day, with a side of potato salad',
      false,
      3.69
    );

    this.addItem(
      `Burrito`,
      'A large burrito, with whole pinto beans, salsa, guacamole',
      true,
      4.29
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.menuItems.set(
      name,
      new MenuItem(name, description, vegetarian, price)
    );
  }

  public createIterator(): Iterator<MenuItem> {
    return new CafeMenuIterator(this.menuItems);
  }
}
