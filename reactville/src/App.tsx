// src/App.jsx

import WeatherForecast from "./components/WeatherForecast.tsx";

export type ForecastType = {
  day: string;
  img: string;
  imgAlt: string;
  conditions: string;
  time: string;
};

const weatherForecasts: ForecastType[] = [
  {
    day: "Mon",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
    imgAlt: "sun icon",
    conditions: "sunny",
    time: "Morning",
  },
  {
    day: "Tue",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
    imgAlt: "moon icon",
    conditions: "clear",
    time: "Night",
  },
  {
    day: "Wed",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
    imgAlt: "clouds with lightning icon",
    conditions: "stormy",
    time: "All Day",
  },
  {
    day: "Thu",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
    imgAlt: "sun overcast by clouds icon",
    conditions: "overcast",
    time: "Evening",
  },
  {
    day: "Fri",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
    imgAlt: "moon overcast by clouds icon",
    conditions: "cloudy",
    time: "Night",
  },
];

// i am confused why we are asked to put the array in the App.tsx one, but ok

const App = () => {
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((forecast) => (
          <WeatherForecast key={forecast.day} forecast={forecast} />
        ))}
      </section>
    </>
  );
};

export default App;
