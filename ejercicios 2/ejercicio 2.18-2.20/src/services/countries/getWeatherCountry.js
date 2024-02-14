export const getWeatherCountry = (country) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API}`
  ).then((res) => res.json());
};

const API = "0d800b673f2f1e37ce943c9462473b0b";
