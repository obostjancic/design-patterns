import { Waitress } from './waitress';

// Iterator pattern provides a way to access the elements of an aggregate
// object sequentially without exposing its underlying representation
export default () => {
  const alice = new Waitress();

  alice.printMenu();
};
