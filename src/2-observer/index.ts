import { driver as weatherDriver } from './weather';

export const driver = () => {
  console.log('\nObserver\n');
  weatherDriver();
};
