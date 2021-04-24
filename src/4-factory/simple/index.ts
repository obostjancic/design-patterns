import { PizzaFactory, SimplePizzaFactory } from './pizza.factory';
import { PizzaStore } from './pizza.store';

const separator = () => console.log('==========================');

export default () => {
  const factory: PizzaFactory = new SimplePizzaFactory();
  const store: PizzaStore = new PizzaStore(factory);

  separator();
  store.orderPizza('cheese');
  separator();
  store.orderPizza('pepperoni');
};
