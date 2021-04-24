import {
  State,
  SoldOutState,
  NoQuarterState,
  HasQuarterState,
  SoldState,
  WinnerState,
  StateName,
} from './state';

export class GumballMachine {
  private states: Map<String, State> = new Map();

  private currentStateName: StateName;
  private count = 0;

  constructor(numberOfGumballs: number) {
    this.addState(new SoldOutState(this));
    this.addState(new NoQuarterState(this));
    this.addState(new HasQuarterState(this));
    this.addState(new SoldState(this));
    this.addState(new WinnerState(this));

    this.count = numberOfGumballs;

    if (this.count > 0) this.currentStateName = StateName.NoQuarter;
    else this.currentStateName = StateName.SoldOut;
  }

  private addState(state: State) {
    this.states.set(state.name(), state);
  }

  public getState(name: string): State {
    if (!this.states.has(name)) throw new Error('Unexpected state');
    return this.states.get(name) as State;
  }

  private getCurrentState() {
    return this.getState(this.currentStateName);
  }

  public insertQuarter() {
    this.getCurrentState().insertQuarter();
  }
  public ejectQuarter() {
    this.getCurrentState().ejectQuarter();
  }
  public turnCrank() {
    this.getCurrentState().turnCrank();
    this.getCurrentState().dispense();
  }

  public setState(state: State) {
    this.currentStateName = state.name();
  }

  public releaseBall() {
    console.log('A gumball comes rolling out the slot ...');
    if (this.count > 0) this.count--;
  }

  public empty() {
    return this.count <= 0;
  }

  public print() {
    console.log(
      `${this.count} gumballs left, Current state: ${this.currentStateName}`
    );
  }
}
