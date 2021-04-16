import {
  Duck,
  MallardDuck,
  RedheadDuck,
  RubberDuck,
  DecoyDuck,
  ModelDuck,
} from './duck';
import { FlyRocketPowered } from './fly.behaviour';

const separator = () => console.log('==========================');

export const driver = () => {
  separator();
  console.log('Ducks');
  separator();

  const mallard: Duck = new MallardDuck();
  mallard.display();
  mallard.performQuack();
  mallard.performFly();

  separator();

  const redhead: Duck = new RedheadDuck();
  redhead.display();
  redhead.performQuack();
  redhead.performFly();

  separator();

  const rubber: Duck = new RubberDuck();
  rubber.display();
  rubber.performQuack();
  rubber.performFly();

  separator();

  const decoy: Duck = new DecoyDuck();
  decoy.display();
  decoy.performQuack();
  decoy.performFly();

  separator();

  const model: Duck = new ModelDuck();
  model.display();
  model.performQuack();
  model.performFly();
  // changing duck behaviour at runtime
  model.setFlyBehaviour(new FlyRocketPowered());
  model.performFly();

  separator();
};
