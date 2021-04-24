import { Waitress } from './waitress';
import { Menu } from './menu';
import { MenuFactory } from './menu.factory';

// Composite patter provides a way to compose objects into tree structures to
// represent part-whole hierarchies. Composite lets clients treat individual
// objects and compositions of objects uniformly
export default () => {
  const pancakeMenu = MenuFactory.create('PANCAKE HOUSE MENU', 'Breakfast');
  const dinerMenu = MenuFactory.create('DINER MENU', 'Lunch');
  const cafeMenu = MenuFactory.create('CAFE MENU', 'Dinner');

  const menu = new Menu('ALL MENUS', 'All menus combined', [
    pancakeMenu,
    dinerMenu,
    cafeMenu,
  ]);
  const alice = new Waitress(menu);

  alice.printMenu();
  alice.printVegetarianMenu();
};
