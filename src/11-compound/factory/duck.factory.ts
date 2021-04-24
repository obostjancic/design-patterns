import { Quackable } from '../quackable';
import { MallardDuck, RedheadDuck, DuckCall, RubberDuck } from '../duck';
import { QuackCounter } from '../decorator/quack.decorator';

export abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createRedheadDuck(): Quackable;
  abstract createDuckCall(): Quackable;
  abstract createRubberDuck(): Quackable;
}

export class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new MallardDuck();
  }

  public createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }

  public createDuckCall(): Quackable {
    return new DuckCall();
  }

  public createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}
export class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  public createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }

  public createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }

  public createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }
}
