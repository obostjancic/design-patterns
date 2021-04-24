import { Stereo } from '../vendor';
import { Command } from '.';
abstract class StereoCommand implements Command {
  protected stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  abstract execute(): void;
  abstract undo(): void;

  abstract name(): string;
}

export class StereoOnWithCdCommand extends StereoCommand {
  public execute() {
    this.stereo.on();
    this.stereo.setCd('Cd 1');
    this.stereo.setVolume(14);
  }

  public undo() {
    this.stereo.setVolume(0);
    this.stereo.off();
  }

  public name() {
    return 'Stereo on';
  }
}

export class StereoOffCommand extends StereoCommand {
  public execute() {
    this.stereo.off();
  }

  public undo() {
    this.stereo.on();
  }

  public name() {
    return 'Stereo off';
  }
}

export class StereoChangeToRadioCommand extends StereoCommand {
  public execute() {
    this.stereo.setChannel('radio');
    this.stereo.setRadioFrequency('98.7 MHz');
  }

  public undo() {
    this.stereo.setChannel('cd');
  }

  public name() {
    return 'Stereo change to radio';
  }
}

export class StereoChangeToCdCommand extends StereoCommand {
  public execute() {
    this.stereo.setChannel('cd');
    this.stereo.setCd('Cd 1');
  }

  public undo() {
    this.stereo.setChannel('radio');
  }

  public name() {
    return 'Stereo change to cd';
  }
}
