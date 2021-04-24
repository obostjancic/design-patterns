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
      const component = iterator.next() as any;

      this.stack.push(component.createIterator());

      return component;
    } else throw Error();
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

  public next(): T {
    throw new Error('Unsupported operation');
  }
}
