import {
  BPMObservable,
  BPMObserver,
  BeatObservable,
  BeatObserver,
} from './observers';

export interface IBeatModel {
  initialize(): void;
  on(): void;
  off(): void;
  setBPM(bpm: number): void;
  getBPM(): number;

  registerBPMObserver(observer: BPMObserver): void;
  removeBPMObserver(observer: BPMObserver): void;
  registerBeatObserver(observer: BeatObserver): void;
  removeBeatObserver(observer: BeatObserver): void;
}

export class BeatModel implements IBeatModel, BeatObservable, BPMObservable {
  private bpm = 90;
  private beatObservers: BeatObserver[] = [];
  private bpmObservers: BPMObserver[] = [];

  public initialize(): void {
    this.buildTrackAndStart();
  }

  private buildTrackAndStart() {
    console.log('Building track...');
  }

  public on(): void {
    console.log('Starting...');
    this.setBPM(90);
  }

  public off(): void {
    console.log('Stopping...');
    this.setBPM(0);
  }

  public setBPM(bpm: number): void {
    this.bpm = bpm;
    this.notifyBPMObservers();
  }

  public getBPM(): number {
    return this.bpm;
  }

  public beatEvent() {
    this.notifyBeatObservers();
  }

  public notifyBPMObservers() {
    this.bpmObservers.forEach((o) => o.updateBPM());
  }

  public notifyBeatObservers() {
    this.beatObservers.forEach((o) => o.updateBeat());
  }

  public registerBPMObserver(observer: BPMObserver) {
    this.bpmObservers.push(observer);
  }

  public removeBPMObserver(_: BPMObserver) {
    //
  }

  public registerBeatObserver(observer: BeatObserver) {
    this.beatObservers.push(observer);
  }

  public removeBeatObserver(_: BeatObserver) {
    //
  }
}
