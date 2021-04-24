import { QuackObservable } from './quack.observable';

export interface Observer {
  update(duck: QuackObservable): void;
}

export class Quackologist implements Observer {
  update(duck: QuackObservable) {
    console.log(`Quackologist: A ${duck.name()} just quacked`);
  }
}
