import { AbstractQuackable } from './quackable';

export class MallardDuck extends AbstractQuackable {
  public quack() {
    console.log('Mallard Quacks');
    this.notify();
  }

  public name() {
    return 'Mallard';
  }
}

export class RedheadDuck extends AbstractQuackable {
  public quack() {
    console.log('Redhead Quacks');
    this.notify();
  }

  public name() {
    return 'Redhead';
  }
}

export class DuckCall extends AbstractQuackable {
  public quack() {
    console.log('Duck call Kwaks');
    this.notify();
  }

  public name() {
    return 'DuckCall';
  }
}

export class RubberDuck extends AbstractQuackable {
  public quack() {
    console.log('Rubber duck Squeaks');
    this.notify();
  }

  public name() {
    return 'Rubber';
  }
}
