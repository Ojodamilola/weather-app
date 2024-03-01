import React from "react";
const DailyForecast = ({ dailyForecast }) => {
  const forecast = dailyForecast.forecast;
  return (
    <div className="dailyForecast mt-3">
      <h3>7 days Forecast {dailyForecast.location.name}</h3>
      <div className="d-flex h-100 flex-column">
        {forecast.forecastday.map((item, index) => (
          <div key={index} className="dailycard mb-3">
            <p className="mb-1">{item.date}</p>
            <div className="d-flex align-items-center justify-content-between">
              <h3>{item.day.avgtemp_c}&deg;C</h3>
              <img src={item.day.condition.icon} alt="img" />
            </div>
            <p>{item.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
