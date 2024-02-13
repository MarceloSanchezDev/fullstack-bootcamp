export const getAllCountries = () =>{
    return fetch("https://studies.cs.helsinki.fi/restcountries/api/all").then(res => res.json())
}