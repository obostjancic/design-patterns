import {
  Beverage,
  Espresso,
  DarkRoast,
  HouseBlend,
  Decaf,
  Size,
} from './beverage';
import { Mocha, Whip, Soy } from './condiment.decorator';

const separator = () => console.log('==========================');

const round = (val: number) => parseFloat(val.toFixed(2));

const printBeverageInfo = (beverage: Beverage) =>
  console.log(`${beverage.getDescription()}, ${round(beverage.cost())}$`);

export default () => {
  console.log('\nDecorator\n');

  const espresso: Beverage = new Espresso();
  printBeverageInfo(espresso);
  separator();

  const darkRoast: Beverage = new DarkRoast();
  const darkRoastMocha = new Mocha(darkRoast);
  const darkRoastDoubleMocha = new Mocha(darkRoastMocha);
  const darkRoastDoubleMochaWhipped = new Whip(darkRoastDoubleMocha);

  printBeverageInfo(darkRoastDoubleMochaWhipped);
  separator();

  // Decorator pattern tends to add a lot of small classes which makes it hard
  // to understand. These issues can be addressed partially with factory and
  // builder patterns
  const houseBlend: Beverage = new HouseBlend();
  const houseBlendSoy = new Soy(houseBlend);
  const houseBlendSoyMocha = new Mocha(houseBlendSoy);
  const houseBlendSoyMochaWhipped = new Whip(houseBlendSoyMocha);

  printBeverageInfo(houseBlendSoyMochaWhipped);
  separator();

  const grandeDecaf: Beverage = new Decaf();
  grandeDecaf.setSize(Size.GRANDE);
  const grandeDecafWhipped = new Whip(grandeDecaf);

  printBeverageInfo(grandeDecafWhipped);
  separator();
};
