export interface BeatObserver {
  updateBeat(): void;
}

export interface BeatObservable {
  notifyBeatObservers(): void;
  registerBeatObserver(o: BeatObserver): void;
}

export interface BPMObserver {
  updateBPM(): void;
}

export interface BPMObservable {
  notifyBPMObservers(): void;
  registerBPMObserver(o: BPMObserver): void;
}
