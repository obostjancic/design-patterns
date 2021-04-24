import { GarageDoor } from '../vendor';
import { Command } from '.';

export class GarageDoorOpenCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute() {
    this.garageDoor.up();
    this.garageDoor.lightOn();
  }

  public undo() {
    this.garageDoor.down();
    this.garageDoor.lightOff();
  }

  public name() {
    return 'Garage door open';
  }
}

export class GarageDoorCloseCommand implements Command {
  private garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute() {
    this.garageDoor.down();
    this.garageDoor.lightOff();
  }

  public undo() {
    this.garageDoor.up();
    this.garageDoor.lightOn();
  }

  public name() {
    return 'Garage door close';
  }
}
