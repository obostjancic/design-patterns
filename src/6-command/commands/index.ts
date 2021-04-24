export interface Command {
  execute(): void;
  undo(): void;
  name(): string;
}

export class NoCommand implements Command {
  public execute() {}

  public undo() {}

  public name() {
    return '---';
  }
}

export {
  CeilingFanHighCommand,
  CeilingFanLowCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
} from './fan.command';
export {
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
} from './garage.command';
export { LightOffCommand, LightOnCommand } from './light.command';
export {
  StereoChangeToCdCommand,
  StereoChangeToRadioCommand,
  StereoOffCommand,
  StereoOnWithCdCommand,
} from './stereo.command';
export { MacroCommand } from './macro.command';
