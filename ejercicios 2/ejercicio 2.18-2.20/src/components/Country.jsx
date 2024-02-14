import { useEffect, useState } from "react";
import Languages from "./Languages";
import { getWeatherCountry } from "../services/countries/getWeatherCountry";
import Weather from "./Weather";

const Country = ({ name, capital, area, languages, flags }) => {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState(undefined);

  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    getWeatherCountry(name.common).then((json) => setWeather(json));
    console.log(weather);
  }, []);

  return (
    <>
      {show ? (
        <div>
          <h1>{name.common}</h1>
          <button onClick={handleShow}>show</button>
        </div>
      ) : (
        <div>
          <h1>{name.common}</h1>
          <button onClick={handleShow}>unshow</button>
          <p>{capital}</p>
          <p>area: {area}</p>
          <h3>languages:</h3>
          <ul>
            <Languages languages={languages} />
          </ul>
          <img src={flags.png} alt={name.common} />
          {!weather ? (
            "loading..."
          ) : (
            <Weather weather={weather} name={name.common} />
          )}
        </div>
      )}
    </>
  );
};
export default Country;
