import { IBeatModel } from './beat.model';
import { DJView } from './dj.view';

export interface IController {
  start(): void;
  stop(): void;
  increaseBPM(): void;
  decreaseBPM(): void;
  setBPM(bpm: number): void;
}

export class Controller implements IController {
  private model: IBeatModel;
  private view: DJView;

  constructor(model: IBeatModel) {
    this.model = model;
    this.model.initialize();

    this.view = new DJView(model, this);
    this.view.createView();
  }

  public start() {
    this.model.on();
  }

  public stop() {
    this.model.off();
  }

  public increaseBPM() {
    this.model.setBPM(this.model.getBPM() + 1);
  }

  public decreaseBPM() {
    this.model.setBPM(this.model.getBPM() - 1);
  }

  public setBPM(bpm: number) {
    this.model.setBPM(bpm);
  }

  public getView() {
    return this.view;
  }
}
