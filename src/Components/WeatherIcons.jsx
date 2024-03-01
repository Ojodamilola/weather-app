import React from "react";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";
import Rain from "../assets/rain.png";
import Mist from "../assets/mistN.png";
import CloudsN from "../assets/cloudsN.png";
import CloudsS from "../assets/cloudsS.png";
import SnowS from "../assets/snowS.png";
import SnowN from "../assets/snowN.png";
import FewcloudsN from "../assets/fewcloudN.png";
import FewcloudsS from "../assets/fewcloudS.png";
import ThunderstormN from "../assets/thunderstormN.png";
import ThunderstormS from "../assets/thunderstormS.png";

const WeatherIcons = ({ weatherIconCode, className }) => {
  let WeatherIcons;
  switch (weatherIconCode) {
    case "01d":
      return <img src={Sun} alt="" className={className} />;
      break;
    case "01n":
      return <img src={Moon} alt="" className={className} />;
      break;
    case "02d":
      return <img src={FewcloudsS} alt="" className={className} />;
      break;
    case "02n":
      return <img src={FewcloudsN} alt="" className={className} />;
      break;
    case "03d":
    case "04d":
      return <img src={CloudsS} alt="" className={className} />;
      break;
    case "03n":
    case "04n":
      return <img src={CloudsN} alt="" className={className} />;
      break;
    case "09d":
      return <img src={ShowerRainS} alt="" className={className} />;
      break;
    case "09n":
      return <img src={ShowerRainN} alt="" className={className} />;
      break;
    case "10d":
    case "10n":
      return <img src={Rain} alt="" className={className} />;
      break;
    case "11d":
      return <img src={ThunderstormS} alt="" className={className} />;
      break;
    case "11n":
      return <img src={ThunderstormN} alt="" className={className} />;
      break;
    case "13d":
      return <img src={SnowS} alt="" className={className} />;
      break;
    case "13n":
      return <img src={SnowN} alt="" className={className} />;
      break;
    case "50n":
    case "50d":
      return <img src={Mist} alt="" className={className} />;
      break;
    default:
      return <img src={Sun} alt="" className={className} />;
  }
 

  return <div>
    {WeatherIcons}
  </div>;
};

export default WeatherIcons;
