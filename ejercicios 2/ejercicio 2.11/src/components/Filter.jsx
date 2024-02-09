const Filter= ({handle , personSearch}) => {
    return  (
        <div>
          filter shown with <input onChange={handle} />
          {personSearch ? (
            <div>
              {personSearch.map(person => <p key={person.id}>{person.name}/{person.number}</p>)}
            </div>
          ) : (
            <></>
          )}
        </div>
    )
}

export default Filter