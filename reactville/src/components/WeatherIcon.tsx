import type { ForecastType } from "../App";

type WeatherIconProps = {
  forecast: ForecastType;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ forecast }) => {
  return (
    <>
      <img src={forecast.img} alt={forecast.imgAlt} />
    </>
  );
};

export default WeatherIcon;
