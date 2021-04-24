import { AbstractQuackable, Quackable } from '../quackable';
import { Observer } from '../observable/quack.observer';

export class QuackCounter extends AbstractQuackable {
  private duck: Quackable;

  private static numOfQuacks = 0;

  constructor(duck: Quackable) {
    super();
    this.duck = duck;
  }

  public quack() {
    this.duck.quack();
    QuackCounter.numOfQuacks++;
  }

  public static getQuacks() {
    return QuackCounter.numOfQuacks;
  }

  public register(observer: Observer) {
    this.duck.register(observer);
  }

  public notify() {
    this.duck.notify();
  }

  public name() {
    return this.duck.name();
  }
}
