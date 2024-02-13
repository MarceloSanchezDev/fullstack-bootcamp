import Country from "./Country";

const FindCountries = ({ search, countries }) => {
  const countriesMatches = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        {countriesMatches.length > 5 ? (
          "too many countries"
        ) : (
          <div>
            {countriesMatches.map((country) => (
              <Country key={country.name.common} {...country} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FindCountries;
