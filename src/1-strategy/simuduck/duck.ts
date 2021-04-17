import { FlyBehaviour, FlyWithWings, FlyNoWay } from './fly.behaviour';
import { QuackBehaviour, Quack, Squeak, MuteQuack } from './quack.behaviour';

export class Duck {
  // Composition allows duck subclasses to be more flexible by combining
  // different behaviours.
  // Specific behaviours are completely encapsulated since these are
  // interfaces
  private quackBehaviour: QuackBehaviour;
  private flyBehaviour: FlyBehaviour;

  constructor(quackBehaviour: QuackBehaviour, flyBehaviour: FlyBehaviour) {
    this.quackBehaviour = quackBehaviour;
    this.flyBehaviour = flyBehaviour;
  }

  // allows us to change behaviour during runtime. Impossible with inheritance
  public setQuackBehaviour(quackBehaviour: QuackBehaviour) {
    this.quackBehaviour = quackBehaviour;
  }

  public setFlyBehaviour(flyBehaviour: FlyBehaviour) {
    this.flyBehaviour = flyBehaviour;
  }

  public performQuack() {
    this.quackBehaviour.quack();
  }

  public performFly() {
    this.flyBehaviour.fly();
  }

  public swim() {
    console.log('swimming');
  }

  public display() {
    console.log('looks like a Duck');
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyWithWings());
  }

  public display() {
    console.log('looks like a MallardDuck');
  }
}

export class RedheadDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyWithWings());
  }
  public display() {
    console.log('looks like a RedheadDuck');
  }
}

export class RubberDuck extends Duck {
  constructor() {
    super(new Squeak(), new FlyNoWay());
  }

  public quack() {
    console.log('squeaking');
  }

  public display() {
    console.log('looks like a RubberDuck');
  }
}

export class DecoyDuck extends Duck {
  constructor() {
    super(new MuteQuack(), new FlyNoWay());
  }

  public quack() {}

  public fly() {}

  public display() {
    console.log('looks like a DecoyDuck');
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyNoWay());
  }

  public quack() {}

  public fly() {}

  public display() {
    console.log('looks like a ModelDuck');
  }
}
