import { GumballMachine } from './gumball.machine';

export default () => {
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
