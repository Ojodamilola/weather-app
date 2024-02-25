import React from "react";
import WeatherIcons from "./WeatherIcons";

const CurrentWeather = ({ currentData }) => {
  const date = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const today = date.toLocaleDateString("en-US", options);
  return (
    <div className="currentWeather">
      <div>
        <div className="city">
          <h1>{currentData.name}</h1>
          <p>{today}</p>
        </div>
        <div className="current-info">
          <div>
            <h3>{Math.round(currentData.main.temp - 273.15)}&deg;C</h3>
            <div>
              <p className="desc">{currentData.weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="weatherImg">
        <WeatherIcons
          weatherIconCode={currentData.weather[0].icon}
          className="large-icon"
        />
        
      </div>
    </div>
  );
};

export default CurrentWeather;
