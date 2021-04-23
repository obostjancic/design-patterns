import { WildTurkey, Turkey } from './turkey';
import { Duck, MallardDuck } from './duck';
import { TurkeyAdapter } from './turkey.adapter';

const separator = () => console.log('==========================');

// Adapter patter converts the interface of a class into another interface
// clients expect. Lets classes work together that couldn't otherwise because
// of incmpatible interfaces
export default () => {
  const turkey: Turkey = new WildTurkey();
  const duck: Duck = new MallardDuck();

  const quackslikeADuck = new TurkeyAdapter(turkey);

  const quackers = [duck, quackslikeADuck];
  quackers.forEach((quacker) => quacker.quack());

  separator();
};
