import { useState } from "react";
import Languages from "./Languages";

const Country = ({ name, capital, area, languages, flags }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
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
          <img src={flags.png} alt={name} />
        </div>
      )}
    </>
  );
};
export default Country;
