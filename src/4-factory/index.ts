import simplePizza from './simple-pizza';
import abstractPizza from './abstract-pizza';

// Among other differences: Simple factory relies on inheritance while
// abstract factory relies on composition
const driver = () => {
  console.log('\nFactory\n');
  simplePizza();
  abstractPizza();
};

export default driver;
