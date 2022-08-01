import React, { useState } from "react";
import { FetchData } from "../api/FetchData";
import { WEEK_DAYS } from "../api/configs";

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [forecast, setForecast] = useState([]);

  const handleLatChange = (evn) => {
    let latitudeForSearch = parseFloat(evn.target.value);
    setLatitude(latitudeForSearch);
  };
  const handleLongChange = (evn) => {
    let longitudeForSearch = parseFloat(evn.target.value);
    setLongitude(longitudeForSearch);
  };

  const handleSearch = async (latitude, longitude) => {
    if (!latitude || !longitude) {
      alert("Please enter 'Latitude' and 'Longitude' for search!");
    }
    let results = await FetchData(latitude, longitude);
    return setForecast(results);
  };

  const handleReset = () => {
    setLatitude("");
    setLongitude("");
    setForecast([]);
  };

  // getting next 7 days of the week starting from search day
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <section className="home">
      <div className="home-title">Upcoming 7 days Forecast</div>

      <div className="home-content">
        <div className="home-content-search">
          <input
            type="number"
            placeholder="Enter latitude"
            value={latitude}
            onChange={handleLatChange}
            className="home-content-search-input"
          />
          <input
            type="number"
            placeholder="Enter longitude"
            value={longitude}
            onChange={handleLongChange}
            className="home-content-search-input"
          />
        </div>

        <div className="home-content-buttonsWrpr">
          <button
            className="home-content-buttonsWrpr-btn"
            onClick={() => handleSearch(latitude, longitude)}
          >
            Search
          </button>
          <button className="home-content-buttonsWrpr-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="home-forecast">
        {forecast &&
          forecast.map((item, index) => (
            <div className="home-forecast-items" key={index}>
              <div className="home-forecast-items-day">{forecastDays[index]}</div>
              <div className="home-forecast-items-temperature">
                max temperature: {Math.round(item)} °C
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;
