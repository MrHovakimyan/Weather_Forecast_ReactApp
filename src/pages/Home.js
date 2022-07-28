import React, { useState } from "react";
import { FetchData } from "../api/FetchData";

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

  const loadedData = async (latitude, longitude) => {
    let results = await FetchData(latitude, longitude);
    return setForecast(results);
  };

  const handleReset = () => {
    setLatitude("");
    setLongitude("");
    setForecast([]);
  };

  return (
    <div className="home-content">
      <div className="home-content-search">
        <input
          type="number"
          placeholder="Enter latitude"
          value={latitude}
          onChange={handleLatChange}
        />
        <input
          type="number"
          placeholder="Enter longitude"
          value={longitude}
          onChange={handleLongChange}
        />
      </div>

      <div className="home-content-buttonsWrpr">
        <button
          className="home-content-buttonsWrpr-btn"
          onClick={() => loadedData(latitude, longitude)}
        >
          Search
        </button>
        <button className="home-content-buttonsWrpr-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      {forecast &&
        forecast.map((item, index) => (
          <div className="home-content-forecast" key={index}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default Home;
