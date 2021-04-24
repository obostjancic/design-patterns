import dinerIterator from './iterator';
import dinerComposite from './composite';

const separator = () => console.log('\n==========================\n');

export default () => {
  console.log('\nIterator and Composite\n');
  console.log('\nIterator\n');
  dinerIterator();
  separator();
  console.log('\nComposite\n');
  dinerComposite();
};
