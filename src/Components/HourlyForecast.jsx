import React from "react";
import { Card } from "react-bootstrap";
import WeatherIcons from "./WeatherIcons";
const HourlyForecast = ({ hourForecast }) => {
  return (
    <div className="hourForecast  mt-3">
      {hourForecast ? (
        <div>
          <h3>3-hour Forecast</h3>
          <div className="d-flex flex-row">
            {hourForecast.list.map((item, index) => (
              <div key={index} className="">
                <Card className="hourcard">
                  <Card.Body>
                    <div>
                      <p>{item.dt_txt}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p>{Math.round(item.main.temp - 273.15)}°C</p>

                      <WeatherIcons
                        weatherIconCode={item.weather[0].icon}
                        className="mid-icon pe-2"
                      />
                    </div>
                    <hr className="my-2 " />
                    <p className="desc">{item.weather[0].description}</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default HourlyForecast;
