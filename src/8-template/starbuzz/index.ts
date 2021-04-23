import { Coffee, Tea } from './beverages';

// Template pattern defines the skeleton of an algorithm in an operation
// deferring some steps to subclasses. Template method lets subclasses redefine
// certain staps of an algorithm without changing the algorithm's structure
export default () => {
  const coffee = new Coffee();
  const tea = new Tea();

  coffee.prepareRecipe();
  console.log();
  tea.prepareRecipe();
};
