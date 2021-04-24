import { Observer } from './quack.observer';

export interface QuackObservable {
  register(observer: Observer): void;
  notify(): void;
  name(): string;
}

export class Observable implements QuackObservable {
  private observers: Observer[] = [];
  private duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
  }

  public register(observer: Observer) {
    this.observers.push(observer);
  }

  public notify() {
    this.observers.forEach((o) => {
      o.update(this.duck);
    });
  }

  public name() {
    return 'Observable';
  }
}
