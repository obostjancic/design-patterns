import { GumballMachine } from './gumball.machine';

// State pattern allows an object to alter its behavior when its internal state
// changes. The object will appear to change its class
export default () => {
  console.log('\nState\n');

  const machine = new GumballMachine(5);

  machine.print();
  machine.insertQuarter();
  machine.turnCrank();

  machine.print();

  machine.insertQuarter();
  machine.ejectQuarter();
  machine.turnCrank();

  machine.print();

  machine.insertQuarter();
  machine.turnCrank();
  machine.insertQuarter();
  machine.turnCrank();
  machine.ejectQuarter();

  machine.print();

  machine.insertQuarter();
  machine.insertQuarter();
  machine.turnCrank();
  machine.insertQuarter();
  machine.turnCrank();
  machine.insertQuarter();
  machine.turnCrank();

  machine.print();
};
