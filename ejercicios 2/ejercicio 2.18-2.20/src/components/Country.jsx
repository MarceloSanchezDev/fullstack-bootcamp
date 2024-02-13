import Languages from "./Languages"

const Country = ({name, capital, area, languages, flags}) => {

    return(
        <>
        <h1>{name.common}</h1>
        <p>{capital}</p>
        <p>area: {area}</p>
        <h3>languages:</h3>
        <ul>
            <Languages languages={languages} />
        </ul>
        <img src={flags.png} alt={name} />
        </>
    )
}
export default Country