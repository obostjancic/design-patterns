import { MenuComponent } from './menu.component';
import { Iterator, CompositeIterator } from './iterator';

export class Menu extends MenuComponent {
  private components: MenuComponent[];
  private name: string;
  private description: string;
  private iterator?: Iterator<MenuComponent> = undefined;

  constructor(
    name: string,
    description: string,
    components: MenuComponent[] = []
  ) {
    super();
    this.name = name;
    this.description = description;
    this.components = components;
  }

  public add(component: MenuComponent) {
    this.components.push(component);
  }

  public remove(component: MenuComponent) {
    const indexToRemove = this.components.findIndex(
      (c) => c.getName() === component.getName()
    );
    if (indexToRemove > -1) this.components.splice(indexToRemove, 1);
  }

  public getChild(i: number) {
    return this.components[i];
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public createIterator() {
    if (!this.iterator)
      this.iterator = new CompositeIterator<MenuComponent>(
        new MenuIterator(this.components)
      );
    return this.iterator;
  }

  public print() {
    console.log(`\n${this.name}, ${this.description}\n-----------------------`);
    this.components.forEach((c) => {
      c.print();
    });
  }
}

class MenuIterator {
  private items: MenuComponent[];
  private position: number = 0;

  constructor(items: MenuComponent[]) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): MenuComponent {
    const result = this.items[this.position];
    this.position++;
    return result;
  }
}
