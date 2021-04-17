import ducks from './ducks';
import adventureGame from './adventure-game';

const driver = () => {
  console.log('\nStrategy\n');
  ducks();
  adventureGame();
};

export default driver;
