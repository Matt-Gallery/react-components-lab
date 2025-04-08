import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({ weather }) => {
  const { day, img, imgAlt, conditions, time } = weather;

  return (
    <div className="weather">
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast;