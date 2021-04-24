import { AbstractQuackable } from './quackable';

export class MallardDuck extends AbstractQuackable {
  public quack() {
    console.log('Quack');
    this.notify();
  }
}

export class RedheadDuck extends AbstractQuackable {
  public quack() {
    console.log('Quack');
    this.notify();
  }
}

export class DuckCall extends AbstractQuackable {
  public quack() {
    console.log('Kwak');
    this.notify();
  }
}

export class RubberDuck extends AbstractQuackable {
  public quack() {
    console.log('Squeak');
    this.notify();
  }
}
