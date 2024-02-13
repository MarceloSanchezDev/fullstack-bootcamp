const Languages = ({languages}) => {

    return(
        <div>
            {Object.keys(languages).map(lang => <li key={lang}>{languages[lang]}</li>)}
        </div>
    )
}
export default Languages