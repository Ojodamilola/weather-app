import React from "react";

const CurrentWeatherDetails = ({ currentData }) => {
  return (
    <div>
      <div className="CurrentWeatherDetails">
        <div>
          <p>Wind</p>
          <h4>{currentData.wind.speed}<span>mph</span> </h4>
        </div>
        <div>
          <p>Real Feel</p>
          <h4>{Math.round(currentData.main.feels_like - 273.15)}<span>&deg;C
            </span> </h4>
        </div>
        <div>
          <p>Humidity</p>
          <h4>{Math.round(currentData.main.humidity)}<span>%</span></h4>
        </div>
        <div>
          <p>Clouds</p>
          <h4>{Math.round(currentData.clouds.all)}<span>%</span></h4>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
