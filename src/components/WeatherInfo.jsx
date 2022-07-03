import React, { useState, useEffect } from "react";

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
    setTemp([Math.round(temperature * 100) / 100, " °C"]);
    changeBackground(icon);
  }, [temperature]);

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
  console.log(icon);
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
            alt=""
          />
          <h3>{description}</h3>
        </div>
        <ul className="list__info">
          <li className="information">
            <b>Wind Speed: </b>
            <span className="data__info">{wind} Mph</span>
          </li>
          <li className="information">
            <b>Pressure: </b>
            <span className="data__info">{pressure} Hpa</span>
          </li>
          <li className="information">
            <b>Clouds: </b>
            <span className="data__info">{clouds}%</span>
          </li>
        </ul>
      </div>
      <div className="btn-center">
        <button onClick={handleTemp}>Degrees °C/°F</button>
      </div>
    </div>
  );
};
export default WeatherInfo;
