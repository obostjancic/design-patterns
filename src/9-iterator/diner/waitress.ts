import { PancakeHouseMenu, DinerMenu, Menu } from './menu';
import { Iterator } from './iterator';
import { MenuItem } from './menu.item';

export class Waitress {
  private pancakeMenu: Menu;
  private dinerMenu: Menu;

  constructor() {
    this.pancakeMenu = new PancakeHouseMenu();
    this.dinerMenu = new DinerMenu();
  }

  public printMenu() {
    console.log('MENU\n----');
    this.printBreakfastMenu();
    this.printLunchMenu();
  }

  private printMenuIterator(iterator: Iterator<MenuItem>) {
    while (iterator.hasNext()) {
      const item = iterator.next();
      console.log(item.toString());
    }
  }

  public printBreakfastMenu() {
    const pancakeMenuIterator = this.pancakeMenu.createIterator();
    console.log('\nBREAKFAST');
    this.printMenuIterator(pancakeMenuIterator);
  }

  public printLunchMenu() {
    const dinerMenuIterator = this.dinerMenu.createIterator();
    console.log('\nLUNCH');
    this.printMenuIterator(dinerMenuIterator);
  }
}
