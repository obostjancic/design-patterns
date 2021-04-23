import adapter from './adapter';
import homeTheater from './home-theater';

export default () => {
  console.log('\nAdapter and Facade \n');
  adapter();
  homeTheater();
};
