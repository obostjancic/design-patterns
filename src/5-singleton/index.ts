import chocOHolic from './choc-o-holic';

// Sigleton = Ensure a class only has one instance ad provide global point of
// access to it
export default () => {
  console.log('\nSingleton\n');
  chocOHolic();
};
