import { driver as duckDriver } from './ducks';
import { driver as adventureGameDriver } from './adventure-game';

export const driver = () => {
  console.log('\nStrategy\n');
  duckDriver();
  adventureGameDriver();
};
