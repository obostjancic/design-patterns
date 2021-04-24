import { MenuItem } from './menu.item';

export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

export class DinerMenuIterator implements Iterator<MenuItem> {
  private items: Set<MenuItem>;
  private position: number = 0;

  constructor(items: Set<MenuItem>) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.position < this.items.size;
  }

  next(): MenuItem {
    // probably not the best idea ever :D
    const res = Array.from(this.items)[this.position];
    this.position++;
    return res;
  }
}

export class PancakeMenuIterator implements Iterator<MenuItem> {
  private items: MenuItem[];
  private position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): MenuItem {
    const result = this.items[this.position];
    this.position++;
    return result;
  }
}
