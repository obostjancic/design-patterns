import { Menu } from './menu';
import { MenuComponent } from './menu.component';
import { MenuItem } from './menu.item';

export class MenuFactory {
  public static create(name: string, description: string) {
    if (name === 'PANCAKE HOUSE MENU')
      return new Menu(name, description, this.createMenuItems('pancake'));
    else if (name === 'DINER MENU') {
      const dinerMenu = new Menu(
        name,
        description,
        this.createMenuItems('diner')
      );
      dinerMenu.add(
        new Menu(
          'DESSERT MENU',
          'Dessert of course!',
          this.createMenuItems('dessert')
        )
      );
      return dinerMenu;
    } else if (name === 'CAFE MENU')
      return new Menu(name, description, this.createMenuItems('cafe'));
    else throw Error('Unknown menu type');
  }

  private static createMenuItems(menuType: string): MenuComponent[] {
    if (menuType === 'pancake')
      return [
        new MenuItem(
          `K&B's pancake breakfast`,
          'Pancakes with scrambled eggs, and toast',
          true,
          2.99
        ),
        new MenuItem(
          `Regular pancake breakfast`,
          'Pancakes with fried eggs, and sausage',
          false,
          2.99
        ),
        new MenuItem(
          `Blueberry pancakes`,
          'Pancakes with fresh blueberries',
          true,
          3.49
        ),
      ];
    else if (menuType === 'diner')
      return [
        new MenuItem(
          `Vegetarian BLT`,
          'Fake bacon with lettuce & tomato on whole wheat',
          true,
          2.99
        ),
        new MenuItem(
          `BLT`,
          'bacon with lettuce & tomato on whole wheat',
          false,
          2.99
        ),
        new MenuItem(
          `Soup of the day`,
          'Soup of the day, with a side of potato salad',
          false,
          3.29
        ),
      ];
    else if (menuType === 'cafe')
      return [
        new MenuItem(
          `Veggie burger and Air Fries`,
          'Veggie burger on a whole wheat bun. lettuce, tomato and fries',
          true,
          3.99
        ),
        new MenuItem(
          `Soup of the day`,
          'Soup of the day, with a side of potato salad',
          false,
          3.69
        ),
        new MenuItem(
          `Burrito`,
          'A large burrito, with whole pinto beans, salsa, guacamole',
          true,
          4.29
        ),
      ];
    else
      return [
        new MenuItem(
          `Apple pie`,
          'Apple pie with flakey crust, topped with vanilla icecream',
          true,
          1.59
        ),
      ];
  }
}
