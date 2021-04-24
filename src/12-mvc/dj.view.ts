import { BeatObserver, BPMObserver } from './observers';
import { IBeatModel } from './beat.model';
import { IController } from './controller';

export class DJView implements BeatObserver, BPMObserver {
  private model: IBeatModel;
  private controller: IController;

  constructor(model: IBeatModel, controller: IController) {
    this.model = model;
    this.controller = controller;

    this.model.registerBPMObserver(this);
    this.model.registerBeatObserver(this);
  }

  public createView() {
    console.log('Opening window...');
    console.log('Creating start and stop items...');
    console.log('Enabling start menu item...');
    console.log('Rendering...');
  }

  public updateBPM() {
    const bpm = this.model.getBPM();
    if (bpm === 0) console.log('Offline');
    else console.log(`Current BPM: ${bpm}`);
  }

  public updateBeat() {
    console.log(`Setting beat to 100`);
  }

  public updateBPMEvent(bpm: string) {
    if (bpm === 'inc') this.controller.increaseBPM();
    else if (bpm === 'dec') this.controller.decreaseBPM();
    else this.controller.setBPM(parseInt(bpm));
  }
}
