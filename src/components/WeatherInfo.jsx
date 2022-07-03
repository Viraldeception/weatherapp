import React, { useState, useEffect } from "react";
import SvgComponent from "../hooks/svg/SvgComponent";
import Cloudsvg from "../hooks/svg/Cloudsvg";
import Pressuresvg from "../hooks/svg/Pressuresvg";

const WeatherInfo = ({
  weather,
  temperature,
  icon,
  city,
  country,
  description,
  wind,
  clouds,
  pressure,
}) => {
  const [temp, setTemp] = useState([0, " °C"]);
  const [background, setBackground] = useState("");

  document.body.style = `background: url(${background}) 
  no-repeat center center fixed;
  -webkit-background-size: cover;
  background-size: 100% 100%`;

  useEffect(() => {
    setTemp([temperature, " °C"]);
    changeBackground(icon);
  }, [temperature, icon]);

  const changeBackground = (icon) => {
    if (icon) {
      //Convertir string a numero, para la evaluación del background
      icon = parseInt(icon.slice(0, 2));

      if (icon === 1) {
        setBackground("https://i.gifer.com/fyCe.gif");
      } else if ((icon >= 2 && icon <= 4) || icon === 50) {
        setBackground("https://i.gifer.com/1F1V.gif");
      } else if (icon >= 9 && icon <= 11) {
        setBackground("https://i.gifer.com/LSiS.gif");
      } else if (icon === 13) {
        setBackground("https://i.gifer.com/YWuH.gif");
      }
    }
  };

  const handleTemp = () => {
    let value = 0;
    if (temp[1] === " °C") {
      value = temp[0] + 32;
      setTemp([value, " °F"]);
    } else {
      value = temp[0] - 32;
      setTemp([value, " °C"]);
    }
  };

  return (
    <div className="weather__box">
      <h1 className="box__title">
        Weather <span className="app__box">App</span>
      </h1>
      <h3 className="box__data__name">
        {city}, "{country}"
      </h3>
      <div className="icon__temp__box">
        <h2 className="box__data__temp">{temp[0] + temp[1]}</h2>
      </div>
      <div className="box__extra__information">
        <div className="description__icon">
          <img
            className="icon__box"
            src={weather && `http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Icono estado"
          />
          <h3>{description}</h3>
        </div>
        <ul className="list__info">
          <li className="information">
            <div className="wind__data__icon">
              <SvgComponent className="wind__icon" />
              <b>Wind Speed: </b>
              <span className="data__info">{wind} m/s</span>
            </div>
          </li>
          <li className="information">
            <div className="pressure__data__icon">
              <Pressuresvg className="pressure__icon" />
              <b>Pressure: </b>
              <span className="data__info">{pressure} Hpa</span>
            </div>
          </li>
          <li className="information">
            <div className="cloud__data__icon">
              <Cloudsvg className="cloud__icon" />
              <b>Clouds: </b>
              <span className="data__info">{clouds}%</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="btn-center">
        <button onClick={handleTemp}>
          {temp[1] === " °C" ? <p>Change to °F</p> : <p>Change to °C</p>}
        </button>
      </div>
    </div>
  );
};
export default WeatherInfo;
