import adapter from './adapter';
import homeTheater from './home-theater';

const driver = () => {
  console.log('\nAdapter and Facade \n');
  adapter();
  homeTheater();
};

export default driver;
