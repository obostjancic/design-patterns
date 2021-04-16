import { Observer, Observable } from './observer.interface';

// Observer pattern defines a one-to-many relationship between objects so
// that when one object changes state, all its dependents are notified and
// updated automatically.
// Provides an object design where Observers and Observables are
// loosely coupled, which means that they can interact, but have very
// little knowledge of each other.
// This allows building flexible OO systems that can handle change because
// they minimize interdependency between objects
export class WeatherData implements Observable {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private observers: Observer[];

  constructor(
    temperature: number = 0,
    humidity: number = 0,
    pressure: number = 0
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.observers = [];
  }

  // Observers can be added or removed at runtime
  public registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  // When the state of one object (Observable) changes, all of its dependents (Observers)
  // are notified.
  public notifyObservers() {
    this.observers.forEach((o) =>
      o.update(this.temperature, this.humidity, this.pressure)
    );
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
