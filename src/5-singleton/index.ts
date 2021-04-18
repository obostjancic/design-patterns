import chocOHolic from './choc-o-holic';

// Sigleton = Ensure a class only has one instance ad provide global point of
// access to it
const driver = () => {
  console.log('\nSingleton\n');
  chocOHolic();
};

export default driver;
