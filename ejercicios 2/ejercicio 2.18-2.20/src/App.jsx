import { useState } from "react"
import FindCountries from "./components/FindCountries"
import { useEffect } from "react"
import { getAllCountries } from "./services/countries/getAllCountries"

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("none")

  useEffect(()=> {getAllCountries().then(json => setCountries(json))},[])
  

  const handleChange = (e) => {setSearchCountry(e.target.value)}

  return(
    <>
    <div>
      {countries.length < 1 ? "loading..." :
      <div>
      find countries 
      <input type="text" onChange={handleChange}/>
      <FindCountries search={searchCountry} countries={countries}/> 
      </div>
  }
    </div>
    </>
  )
}

export default App
