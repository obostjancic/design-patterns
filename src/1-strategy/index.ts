import simUDuck from './simuduck';
import adventureGame from './adventure-game';

const driver = () => {
  console.log('\nStrategy\n');
  simUDuck();
  adventureGame();
};

export default driver;
