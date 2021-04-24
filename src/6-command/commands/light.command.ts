import { Light } from '../vendor';
import { Command } from '.';

export class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute() {
    this.light.on();
  }

  public undo() {
    this.light.off();
  }

  public name() {
    return 'Light on';
  }
}

export class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute() {
    this.light.off();
  }

  public undo() {
    this.light.on();
  }

  public name() {
    return 'Light off';
  }
}
