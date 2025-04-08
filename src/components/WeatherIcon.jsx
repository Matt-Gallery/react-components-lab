import './WeatherForecast.css';

const WeatherIcon = ({ img, imgAlt }) => {
  return (
    <div className="imgs">
      <img src={img} alt={imgAlt} />
    </div>
  );
};

export default WeatherIcon;