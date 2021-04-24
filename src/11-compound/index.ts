import {
  AbstractDuckFactory,
  CountingDuckFactory,
} from './factory/duck.factory';
import { Goose, GooseAdapter } from './adapter/goose';
import { Quackable } from './quackable';
import { Flock } from './composite/flock';
import { Quackologist } from './observable/quack.observer';
import { QuackCounter } from './decorator/quack.decorator';

export default () => {
  console.log('\nCompound\n');

  const factory: AbstractDuckFactory = new CountingDuckFactory();
  const mallard: Quackable = factory.createMallardDuck();
  const redhead: Quackable = factory.createRedheadDuck();
  const duckCall: Quackable = factory.createDuckCall();
  const rubber: Quackable = factory.createRubberDuck();

  const goose: Quackable = new GooseAdapter(new Goose());
  console.log('Duck simulator: With Composite - Flocks');

  const flockOfMallards = new Flock();

  flockOfMallards.add(factory.createMallardDuck());
  flockOfMallards.add(factory.createMallardDuck());
  flockOfMallards.add(factory.createMallardDuck());
  flockOfMallards.add(factory.createMallardDuck());

  const flockOfDucks = new Flock();

  flockOfDucks.add(mallard);
  flockOfDucks.add(redhead);
  flockOfDucks.add(duckCall);
  flockOfDucks.add(rubber);
  flockOfDucks.add(goose);
  flockOfDucks.add(flockOfMallards);

  const quackologist = new Quackologist();
  flockOfDucks.register(quackologist);

  console.log('\nDuck Simulator: Whole flock Simulation');
  simulate(flockOfDucks);

  console.log('\nDuck Simulator: Mallard flock Simulation');
  simulate(flockOfMallards);

  console.log(`The ducks quacked ${QuackCounter.getQuacks()} times`);
};

const simulate = (duck: Quackable) => {
  duck.quack();
};
