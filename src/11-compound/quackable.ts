import { QuackObservable, Observable } from './observable/quack.observable';
import { Observer } from './observable/quack.observer';

export interface Quackable extends QuackObservable {
  quack(): void;
}

export abstract class AbstractQuackable implements Quackable {
  protected observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public register(observer: Observer) {
    this.observable.register(observer);
  }

  public notify() {
    this.observable.notify();
  }

  abstract quack(): void;
}
