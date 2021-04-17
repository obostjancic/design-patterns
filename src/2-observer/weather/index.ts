import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  HeatIndexDisplay,
  StatisticsDisplay,
} from './display';
import { WeatherData } from './weather.data';

const separator = () => console.log('==========================');

export const driver = () => {
  const data: WeatherData = new WeatherData();

  new CurrentConditionsDisplay(data);
  new StatisticsDisplay(data);
  new ForecastDisplay(data);
  new HeatIndexDisplay(data);

  separator();
  data.setMeasurements(27, 86, 997);
  separator();
  data.setMeasurements(23, 72, 1023);
  separator();
  data.setMeasurements(31, 78, 1007);
  separator();
};
