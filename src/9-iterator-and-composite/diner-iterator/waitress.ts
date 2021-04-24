import { PancakeHouseMenu, DinerMenu, Menu, CafeMenu } from './menu';
import { Iterator } from './iterator';
import { MenuItem } from './menu.item';

export class Waitress {
  private menus: Menu[];

  constructor() {
    this.menus = [new PancakeHouseMenu(), new DinerMenu(), new CafeMenu()];
  }

  public printMenu() {
    console.log('ALL MENUS, All menus combined\n----');
    this.menus.forEach((menu) => {
      console.log(
        `\n${menu.name}, ${menu.description}\n-----------------------`
      );
      this.printMenuIterator(menu.createIterator());
    });
  }

  private printMenuIterator(iterator: Iterator<MenuItem>) {
    while (iterator.hasNext()) {
      const item = iterator.next();
      console.log(item.toString());
    }
  }
}
