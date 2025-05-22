import "./WeatherForecast.css";
import type { ForecastType } from "../App";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

type WeatherForecastProps = {
  forecast: ForecastType;
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <>
      <div className="weather">
        <h2>{forecast.day}</h2>
        <WeatherIcon forecast={forecast} />
        <WeatherData forecast={forecast} />
      </div>
    </>
  );
};

export default WeatherForecast;
