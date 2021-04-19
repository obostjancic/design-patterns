import { CeilingFan } from '../vendor';
import { Command } from '.';

abstract class CeilingFanCommand implements Command {
  protected fan: CeilingFan;
  protected prevSpeed: number;

  constructor(fan: CeilingFan) {
    this.fan = fan;
    this.prevSpeed = fan.getSpeed();
  }

  abstract execute(): void;
  abstract name(): string;

  public undo() {
    if (this.prevSpeed === CeilingFan.HIGH) this.fan.high();
    else if (this.prevSpeed === CeilingFan.MEDIUM) this.fan.medium();
    else if (this.prevSpeed === CeilingFan.LOW) this.fan.low();
    else this.fan.off();
  }
}

export class CeilingFanHighCommand extends CeilingFanCommand {
  public execute() {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.high();
  }

  public name() {
    return 'Ceiling fan high speed';
  }
}

export class CeilingFanMediumCommand extends CeilingFanCommand {
  public execute() {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.medium();
  }

  public name() {
    return 'Ceiling fan medium speed';
  }
}

export class CeilingFanLowCommand extends CeilingFanCommand {
  public execute() {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.low();
  }

  public name() {
    return 'Ceiling fan low speed';
  }
}

export class CeilingFanOffCommand extends CeilingFanCommand {
  public execute() {
    this.prevSpeed = this.fan.getSpeed();
    this.fan.off();
  }

  public name() {
    return 'Ceiling fan off';
  }
}
