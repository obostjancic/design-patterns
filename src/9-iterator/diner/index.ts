import { Waitress } from './waitress';

export default () => {
  const alice = new Waitress();

  alice.printMenu();
};
