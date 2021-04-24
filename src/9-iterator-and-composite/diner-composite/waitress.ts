import { MenuComponent } from './menu.component';

export class Waitress {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu() {
    this.allMenus.print();
  }

  public printVegetarianMenu() {
    const iterator = this.allMenus.createIterator();
    console.log('\nVEGETARIAN MENU\n----');
    while (iterator.hasNext()) {
      const menuComponent = iterator.next();
      try {
        if (menuComponent.isVegetarian()) menuComponent.print();
      } catch (e) {}
    }
  }
}
