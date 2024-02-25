import React from "react";
import { Card } from "react-bootstrap";
import WeatherIcons from "./WeatherIcons";
const DailyForecast = ({ forecast }) => {
  return (
    <div>
      <div className="forecast">
        {forecast.list.map((item, index) => (
          <div key={index}>
            <Card>
              <Card.Body>
                <div>
                  <p> {item.dt_txt}</p>
                </div>
                <p>{Math.round(item.main.temp - 273.15)}°C</p>
                <hr />
                <p className="forecastDesc">{item.weather[0].description}</p>
                <p>
                  <WeatherIcons
                    weatherIconCode={item.weather[0].icon}
                    className="mid-icon"
                  />
                </p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
