import './App.css';
import WeatherForecast from './components/WeatherForecast';

const App = () => { 
  const weathers= [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
    id: 1,
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
    id: 2,
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
    id: 3,
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
    id: 4,
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
    id: 5,
  },
];


  return (
    <>
    <h1>Local Weather</h1>
    <section>
      {weathers.map((weatherItem) => (
        <WeatherForecast
          key={weatherItem.id}
          weather={weatherItem}
         />
      ))}
    </section>
  </>
  );
}

export default App
