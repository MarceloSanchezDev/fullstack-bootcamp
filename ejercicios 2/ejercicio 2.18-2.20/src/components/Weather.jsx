const Weather = ({ weather, name }) => {
  console.log(weather);
  return (
    <>
      <div>
        <h1>Weather in {name}</h1>
        <p>temp:{weather.main.temp}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].main}
        />
        <p>wind:{weather.wind.speed}</p>
      </div>
    </>
  );
};

export default Weather;
