import { NYPizzaStore, PizzaStore, ChicagoPizzaStore } from './pizza.store';

const separator = () => console.log('==========================');

const driver = () => {
  const nyStore: PizzaStore = new NYPizzaStore();
  const chicagoStore: PizzaStore = new ChicagoPizzaStore();

  separator();
  nyStore.orderPizza('cheese');
  separator();
  chicagoStore.orderPizza('pepperoni');
};

export default driver;
