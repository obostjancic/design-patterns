import { Duck } from './duck';
import { Turkey } from './turkey';

export class TurkeyAdapter implements Duck {
  private turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public quack() {
    this.turkey.gobble();
  }

  public fly() {
    new Array(5).forEach(() => {
      this.turkey.fly();
    });
  }
}
