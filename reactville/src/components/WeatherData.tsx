import type { ForecastType } from "../App";

type WeatherDataProp = {
  forecast: ForecastType;
};

const WeatherData: React.FC<WeatherDataProp> = ({ forecast }) => {
  return (
    <>
      <p>
        <span>conditions: </span>
        {forecast.conditions}
      </p>
      <p>
        <span>time: </span>
        {forecast.time}
      </p>
    </>
  );
};

export default WeatherData;
