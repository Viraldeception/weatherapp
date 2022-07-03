import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import { Loader } from "./components/Loader";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, isLoading } = useWeather();

  return (
    <div className="background">
      {isLoading ? (
        <Loader />
      ) : (
        <WeatherInfo
          weather={weather}
          city={weather.city}
          country={weather.country}
          temperature={Math.round(weather.temperature)}
          description={weather.description}
          wind={weather.wind}
          clouds={weather.clouds}
          pressure={weather.clouds}
          icon={weather.icon}
        />
      )}
    </div>
  );
}

export default App;
