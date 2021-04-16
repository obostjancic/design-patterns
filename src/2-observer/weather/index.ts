import { WeatherData } from "./weather.data";
import { CurrentConditionsDisplay, ForecastDisplay, StatisticsDisplay, HeatIndexDisplay, Display } from "./display";

const separator = () => console.log("==========================");

export const driver = () => {
  const data: WeatherData = new WeatherData();

  const currentDisplay: Display = new CurrentConditionsDisplay(data);
  const statisticsDisplay: Display = new StatisticsDisplay(data);
  const forecastDisplay: Display = new ForecastDisplay(data);
  const heatIndexDisplay: Display = new HeatIndexDisplay(data);

  separator();
  data.setMeasurements(27, 86, 997);
  separator();
  data.setMeasurements(23, 72, 1023);
  separator();
  data.setMeasurements(31, 78, 1007);
  separator();
};
