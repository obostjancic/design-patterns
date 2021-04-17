import { Observer, Observable } from './observer.interface';
import { WeatherData } from './weather.data';

export interface Display {
  display(): void;
}

export class CurrentConditionsDisplay implements Observer, Display {
  private temperature = 0;
  private humidity = 0;
  private pressure = 0;
  private weatherData: Observable;

  constructor(data: WeatherData) {
    this.weatherData = data;
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log(
      `Current conditions: Temp: ${this.temperature} ˚C, humidity: ${this.humidity}%, pressure: ${this.pressure} mBar`
    );
  }
}
export class StatisticsDisplay implements Observer, Display {
  private temperatures: number[] = [];
  private humidities: number[] = [];
  private pressures: number[] = [];
  private weatherData: Observable;

  constructor(data: WeatherData) {
    this.weatherData = data;
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number) {
    this.temperatures.push(temperature);
    this.humidities.push(humidity);
    this.pressures.push(pressure);
    this.display();
  }

  public display() {
    console.log(
      `Statistics: Temp ${this.formatAvgMedian(
        this.temperatures,
        '˚C'
      )}, humidity ${this.formatAvgMedian(
        this.humidities,
        '%'
      )}, pressure ${this.formatAvgMedian(this.pressures, 'mBar')}`
    );
  }

  private formatAvgMedian(values: number[], unit: string) {
    return `avg: ${this.avg(values).toFixed(1)} ${unit}, median: ${this.median(
      values
    ).toFixed(1)} ${unit}`;
  }

  private avg(values: number[]) {
    return values.reduce((sum, val) => (sum += val), 0) / values.length;
  }

  private median(values: number[]) {
    const arrSort = values.sort();
    const mid = Math.ceil(values.length / 2);

    return values.length % 2 == 0
      ? (arrSort[mid] + arrSort[mid - 1]) / 2
      : arrSort[mid - 1];
  }
}
export class ForecastDisplay implements Observer, Display {
  private forecasts: string[] = [
    'More of the same',
    'Dont go out without sunglasses',
    'Bring an umbrella with you',
  ];
  private weatherData: Observable;

  constructor(data: WeatherData) {
    this.weatherData = data;
    this.weatherData.registerObserver(this);
  }

  public update() {
    this.display();
  }

  public display() {
    console.log(`Forecast: ${this.randomElement(this.forecasts)}`);
  }

  private randomElement(arr: any[]) {
    return arr[this.randInt(0, arr.length)];
  }

  private randInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export class HeatIndexDisplay implements Observer, Display {
  private temperature = 0;
  private humidity = 0;
  private weatherData: Observable;

  constructor(data: WeatherData) {
    this.weatherData = data;
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display() {
    console.log(`Heat index: ${this.computeHeatIndex().toFixed(2)}`);
  }

  private computeHeatIndex() {
    const { t, rh } = { t: this.temperature, rh: this.humidity };
    return (
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh)
    );
  }
}
