import { GumballMachine } from './gumball.machine';

export enum StateName {
  SoldOut = 'Sold out',
  NoQuarter = 'No quarter',
  HasQuarter = 'Has quarter',
  Winner = 'Winner',
  Sold = 'Sold',
}

export interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
  name(): StateName;
}

abstract class GumballState implements State {
  protected gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  abstract name(): StateName;

  insertQuarter(): void {
    console.log(`Can't insert quarter`);
  }

  ejectQuarter(): void {
    console.log(`Can't eject quarter`);
  }

  turnCrank(): void {
    console.log(`Can't turn crank quarter`);
  }

  dispense(): void {
    console.log(`Can't dispense`);
  }

  setState(state: State) {
    this.gumballMachine.setState(state);
  }
}

export class SoldOutState extends GumballState {
  public name() {
    return StateName.SoldOut;
  }
}

export class NoQuarterState extends GumballState {
  public insertQuarter() {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(
      this.gumballMachine.getState(StateName.HasQuarter)
    );
  }

  public name() {
    return StateName.NoQuarter;
  }
}

export class HasQuarterState extends GumballState {
  public ejectQuarter() {
    console.log(`Quarter returned`);
    this.setState(this.gumballMachine.getState(StateName.NoQuarter));
  }

  public turnCrank() {
    console.log('You turned...');
    if (Math.random() < 0.1)
      this.setState(this.gumballMachine.getState(StateName.Winner));
    else this.setState(this.gumballMachine.getState(StateName.Sold));
  }

  public name() {
    return StateName.HasQuarter;
  }
}

export class WinnerState extends GumballState {
  public dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.empty()) {
      console.log('Oops, out of gumballs!');
      this.setState(this.gumballMachine.getState(StateName.SoldOut));
    } else {
      this.gumballMachine.releaseBall();
      console.log('YOU ARE A WINNER! You got two gumballs for your quarter');
      if (this.gumballMachine.empty()) {
        console.log('Oops, out of gumballs!');
        this.setState(this.gumballMachine.getState(StateName.SoldOut));
      } else this.setState(this.gumballMachine.getState(StateName.NoQuarter));
    }
  }

  public name() {
    return StateName.Winner;
  }
}

export class SoldState extends GumballState {
  public dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.empty()) {
      console.log('Oops, out of gumballs!');
      this.setState(this.gumballMachine.getState(StateName.SoldOut));
    } else this.setState(this.gumballMachine.getState(StateName.NoQuarter));
  }

  public name() {
    return StateName.Sold;
  }
}
