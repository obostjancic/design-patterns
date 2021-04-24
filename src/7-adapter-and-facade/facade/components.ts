export class DVDPlayer {
  public on() {
    console.log('Turning DVD Player on');
  }

  public off() {
    console.log('Turning DVD Player off');
  }

  public play(movie: string) {
    console.log(`Playing ${movie}`);
  }

  public stop() {
    console.log('Stopping DVD');
  }

  public pause() {
    console.log('Pausing DVD');
  }

  public eject() {
    console.log('Ejecting DVD');
  }
}

export class Projector {
  private dvdPlayer: DVDPlayer;

  constructor(dvdPlayer: DVDPlayer) {
    this.dvdPlayer = dvdPlayer;
  }

  public getDvd() {
    return this.dvdPlayer;
  }

  public on() {
    console.log('Turning projector on');
  }

  public off() {
    console.log('Turning projector off');
  }

  public tvMode() {
    console.log('Projecting in TV mode');
  }

  public wideScreenMode() {
    console.log('Projecting in wide screen mode');
  }
}

export class TheaterLights {
  public on() {
    console.log('Turning lights on');
  }

  public off() {
    console.log('Turning lights off');
  }

  public dim() {
    console.log('Dimming lights off');
  }
}

export class PopcornPopper {
  public on() {
    console.log('Turning popper on');
  }

  public off() {
    console.log('Turning popper off');
  }

  public pop() {
    console.log('Popping popcorn');
  }
}

export class ProjectorScreen {
  public up() {
    console.log('Pulling screen up');
  }

  public down() {
    console.log('Pulling screen down');
  }
}

export class Tuner {
  public on() {
    console.log('Turning tuner on');
  }

  public off() {
    console.log('Turning tuner off');
  }

  public setFrequency(frequency: string) {
    console.log(`Setting ferequency to ${frequency}`);
  }
}

export class Amplifier {
  private tuner: Tuner;
  private dvdPlayer: DVDPlayer;

  constructor(tuner: Tuner, dvdPlayer: DVDPlayer) {
    this.tuner = tuner;
    this.dvdPlayer = dvdPlayer;
  }

  public setDvd(dvdPlayer: DVDPlayer) {
    this.dvdPlayer = dvdPlayer;
  }

  public getDvd() {
    return this.dvdPlayer;
  }

  public setTuner(tuner: Tuner) {
    this.tuner = tuner;
  }

  public getTuner() {
    return this.tuner;
  }

  public setStereoSound() {
    console.log('Setting stereo sound');
  }

  public setSurroundSound() {
    console.log('Setting surround sound');
  }

  public setVolume(volume: number) {
    console.log(`Setting volume to ${volume}`);
  }

  public on() {
    console.log('Turning amplifier on');
  }

  public off() {
    console.log('Turning amplifier off');
  }
}
