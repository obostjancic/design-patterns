export interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

export interface Observable {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
