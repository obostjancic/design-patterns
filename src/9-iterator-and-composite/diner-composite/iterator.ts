export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Array based stack implemetation - helper
export class Stack<T> {
  private items: T[] = [];

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): void {
    this.items.pop();
  }

  public empty(): boolean {
    return this.items.length === 0;
  }

  public peek(): T {
    if (this.empty()) throw new Error('Stack is empty');

    return this.items[this.items.length - 1];
  }
}

export class CompositeIterator<T> implements Iterator<T> {
  // so not a stack, but will be used as it is
  private stack: Stack<Iterator<T>> = new Stack();

  constructor(iterator: Iterator<T>) {
    this.stack.push(iterator);
  }

  public next(): T {
    if (this.hasNext()) {
      const iterator = this.stack.peek();
      const component = iterator.next();

      //@ts-ignore
      this.stack.push(component?.createIterator());

      return component;
      //@ts-ignore
    } else return null;
  }

  public hasNext(): boolean {
    if (this.stack.empty()) return false;
    else {
      const iterator = this.stack.peek();
      if (!iterator.hasNext()) {
        this.stack.pop();
        return this.hasNext();
      } else return true;
    }
  }
}

export class NullIterator<T> implements Iterator<T> {
  public hasNext() {
    return false;
  }

  //@ts-ignore
  public next(): T {
    throw new Error('Unsupported operation');
  }
}

// export class DinerMenuIterator implements Iterator<MenuItem> {
//   private items: Set<MenuItem>;
//   private position: number = 0;

//   constructor(items: Set<MenuItem>) {
//     this.items = items;
//   }

//   hasNext(): boolean {
//     return this.position < this.items.size;
//   }

//   next(): MenuItem {
//     // probably not the best idea ever :D
//     const res = Array.from(this.items)[this.position];
//     this.position++;
//     return res;
//   }
// }

// export class PancakeMenuIterator implements Iterator<MenuItem> {
//   private items: MenuItem[];
//   private position: number = 0;

//   constructor(items: MenuItem[]) {
//     this.items = items;
//   }

//   hasNext(): boolean {
//     return this.position < this.items.length;
//   }

//   next(): MenuItem {
//     const result = this.items[this.position];
//     this.position++;
//     return result;
//   }
// }
// export class CafeMenuIterator implements Iterator<MenuItem> {
//   private items: Map<string, MenuItem>;
//   private position: number = 0;

//   constructor(items: Map<string, MenuItem>) {
//     this.items = items;
//   }

//   hasNext(): boolean {
//     return this.position < this.items.size;
//   }

//   next(): MenuItem {
//     // probably not the best idea ever :D
//     const res = Array.from(this.items)[this.position];
//     this.position++;
//     return res[1];
//   }
// }
