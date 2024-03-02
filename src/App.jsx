import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "react-bootstrap-icons";
import HourlyForecast from "./Components/HourlyForecast";
import { Col, Row } from "react-bootstrap";
import CurrentWeather from "./Components/CurrentWeather";
import CurrentWeatherDetails from "./Components/CurrentWeatherDetails";
import DailyForecast from "./Components/DailyForecast";

function App() {
  const apiKey = "6a0ce76895d9c8de6cffbd89fb467e88";
  const apiAccessKey = "dffb541e95a64980898154955242702";
  const [location, setCityName] = useState("");
  const [currentData, setCurrentData] = useState(null);
  const [error, setError] = useState(null);
  const [hourForecast, setHourForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = async (latitude, longitude) => {
    const userLatitude = localStorage.getItem("userLatitude");
    const userLongitude = localStorage.getItem("userLongitude");
    if (userLatitude && userLongitude) {
      const getHourForecast = async () => {
        try {
          const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${userLatitude}&lon=${userLongitude}&cnt=7&appid=${apiKey}`;
          const res = await fetch(url);
          const data = await res.json();
          console.log("Forecast Data: ", data);
          setHourForecast(data);
        } catch (error) {
          console.log("Error fetching weather forecast:", error);
        }
      };
      const getDailyForecast = async () => {
        
        const url = "https://api.weatherapi.com/v1/forecast.json?";

        try {
          const res = await fetch(
            `${url}key=${apiAccessKey}&q=${userLatitude},${userLongitude}&days=7`
          );
          const data = await res.json();
          console.log("7-day forecast: ", data);
          setDailyForecast(data);
        } catch (error) {
          console.log(error);
          setCurrentData(null);
          setError(error);
        }
      };
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLatitude}&lon=${userLongitude}&appid=${apiKey}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error fetching live location");
          console.log(error);
        }
        const data = await res.json();
        setCurrentData(data);
        setError(null);
        getHourForecast();
        getDailyForecast();

        console.log(data);
      } catch (error) {
        console.log(error);
        setCurrentData(null);
        setError(error.message);
      }
    }
  };
  const handleSearch = async () => {
    const getHourForecast = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=7&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("Forecast Data: ", data);
        setHourForecast(data);
      } catch (error) {
        console.log("Error fetching weather forecast:", error);
      }
    };
    const getDailyForecast = async () => {
      const url = "https://api.weatherapi.com/v1/forecast.json?";
      try {
        const res = await fetch(
          `${url}key=${apiAccessKey}&q=${location}&days=7`
        );
        const data = await res.json();
        console.log("7-day forecast: ", data);
        setDailyForecast(data);
      } catch (error) {
        console.log(error);
        setCurrentData(null);
        setError(error);
      }
    };

    try {
      if (!location.trim()) {
        throw new Error("Please enter a city name");
        setError("Please enter a city name");
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
        setError("City not found");
      }
      const data = await response.json();
      setCurrentData(data);
      setError(null);
      console.log(data);
      getHourForecast();
      getDailyForecast();
    } catch (error) {
      setCurrentData(null);
      setError(error.message);
      console.log(error);
    }
    setCityName("");
  };
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem("userLatitude", latitude);
          localStorage.setItem("userLongitude", longitude);
          // getCurrentWeather(latitude, longitude);
          console.log("userLocation: ", latitude, longitude);
        },
        (error) => {
          setError(
            "Failed to get your location. Ensure your location settings is on"
          );
          console.log(error);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }


  return (
    <>
      <div className="App">
        <div className="layout container-fluid">
          <Row>
            <Col lg={8} md={12} xs={12} className="col-8">
              <div>
                <div className="search-group">
                  <input
                    name="search"
                    id="search"
                    type="search"
                    placeholder="Search for cities"
                    className="search-control"
                    value={location}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setCityName(e.target.value)}
                  />
                  <button className="search-btn" onClick={handleSearch}>
                    <Search className="search" />
                  </button>
                </div>
              </div>

              {error && <p className="w-50 mt-2 text-danger">{error}</p>}
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={12} xs={12} className="col-8">
              <Row>
                {currentData ? (
                  <div>
                    <Col className="col-12">
                      <div className="weatherDisplay">
                        <CurrentWeather currentData={currentData} />
                      </div>
                    </Col>
                    <Col className="col-12">
                      <div className="weatherDetails">
                        <CurrentWeatherDetails currentData={currentData} />
                      </div>
                    </Col>
                  </div>
                ) : (
                  <div className="loading">
                    <div className="spinner-border text-white" role="status">
                      <span className="sr-only"></span>
                    </div>
                    <p>
                      Unable to fetch weather data. <br /> Please ensure your
                      location is on, or input a valid city name and Check your
                      internet connection then try again
                    </p>
                  </div>
                )}
                <Col className="col-12">
                  <div className="forecast">
                    <HourlyForecast hourForecast={hourForecast} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={12} xs={12} className="col-4">
               <div>
                {dailyForecast ? (
                  <DailyForecast dailyForecast={dailyForecast} />
                ) : (
                  <p>no daily forecast</p>
                )}
              </div> 
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
