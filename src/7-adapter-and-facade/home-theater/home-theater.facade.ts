import {
  Amplifier,
  Tuner,
  DVDPlayer,
  Projector,
  ProjectorScreen,
  TheaterLights,
  PopcornPopper,
} from './components';

export class HomeTheaterFacade {
  private amp: Amplifier;
  private tuner: Tuner = new Tuner();
  private projector: Projector;
  private dvd: DVDPlayer = new DVDPlayer();
  private screen: ProjectorScreen = new ProjectorScreen();
  private lights: TheaterLights = new TheaterLights();
  private popper: PopcornPopper = new PopcornPopper();

  constructor(amp: Amplifier, projector: Projector) {
    this.amp = amp;
    this.projector = projector;
  }

  public watchMovie(movie: string) {
    console.log('Get ready to watch a movie...');

    this.popper.on();
    this.popper.pop();

    this.lights.dim();

    this.screen.down();

    this.projector.on();
    this.projector.wideScreenMode();

    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);

    this.tuner.on();

    this.dvd.on();
    this.dvd.play(movie);
  }

  public endMovie() {
    console.log('Shutting movie theater down...');

    this.popper.off();

    this.lights.off();

    this.screen.up();

    this.projector.off();

    this.amp.off();

    this.tuner.off();

    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
}
