import simple from './simple';
import abstract from './abstract';

// Among other differences: Simple factory relies on inheritance while
// abstract factory relies on composition
export default () => {
  console.log('\nFactory\n');
  simple();
  abstract();
};
