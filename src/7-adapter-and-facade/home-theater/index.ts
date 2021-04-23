import { Projector, DVDPlayer, Tuner, Amplifier } from './components';
import { HomeTheaterFacade } from './home-theater.facade';

// Facade pattern provides a unified interface to a set of interfaces in a
// subsystem. Facade defines a highel-level interface that makes the subsystem
// easier to use
export default () => {
  const dvd = new DVDPlayer();
  const projector = new Projector(dvd);
  const amplifier = new Amplifier(new Tuner(), dvd);

  const homeTheater = new HomeTheaterFacade(amplifier, projector);

  homeTheater.watchMovie('The dictator');
  console.log('\n\nStarting\nPlaying\nEnding\n\n');
  homeTheater.endMovie();
};
