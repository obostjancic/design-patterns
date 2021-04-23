import { ChocolateBoiler } from './chocolate.boiler';

export default () => {
  const boiler1 = ChocolateBoiler.getBoiler();
  const boiler2 = ChocolateBoiler.getBoiler();

  boiler1.printState();
  boiler1.fill();
  boiler2.printState();
  boiler2.boil();
  boiler1.printState();
  boiler1.drain();
  boiler2.printState();
};
