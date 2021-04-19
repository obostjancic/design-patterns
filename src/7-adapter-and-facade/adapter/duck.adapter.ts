import { Turkey } from './turkey';
import { Duck } from './duck';

export class DuckAdapter implements Turkey {
  private duck: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  public gobble() {
    this.duck.quack();
  }

  public fly() {
    if (Math.random() < 0.2) this.duck.fly();
  }
}
