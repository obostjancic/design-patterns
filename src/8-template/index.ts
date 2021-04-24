import { Coffee, Tea } from './beverages';

export default () => {
  console.log('\nTemplate\n');

  const coffee = new Coffee();
  const tea = new Tea();

  coffee.prepareRecipe();
  console.log();
  tea.prepareRecipe();
};
