import React from "react";
import {
  Sun,
  Moon,
  CloudSun,
  Cloud,
  CloudRain,
  Snow,
} from "react-bootstrap-icons";

const WeatherIcons = ({ weatherIconCode, className }) => {
  const getWeatherIcons = () => {
    switch (weatherIconCode) {
      case "01d":
        return <Sun />;
      case "01n":
        return <Moon />;
      case "02d":
      case "02n":
        return <CloudSun />;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return <Cloud />;
      case "09d":
      case "09n":
        return <CloudRain />;
      case "10d":
      case "10n":
      case "11d":
      case "11n":
        return <CloudRain />;
      case "13d":
      case "13n":
        return <Snow />;
      default:
        return <Sun />;
    }
  };


  {
    /**  
  
  return <img src={getWeatherIcons()} className={className} alt='.'
  onError={() => console.error(`Failed to load image: ${imageUrl}`)} />
  */
  }
  return (
    <p className={className}>{getWeatherIcons()}</p>
   
  );
};

export default WeatherIcons;
