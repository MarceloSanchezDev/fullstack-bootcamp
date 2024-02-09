import { useState } from 'react'

function searchName( array, name) {
  const findName = array.find(arr => arr.name === name)
  return findName
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange= (e)=> {
    setNewName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const numbersObjet = {
      name: newName
    }
    if(searchName(persons, newName)){
      alert(`${newName}, already exist`)
    }else{
      setPersons(persons.concat(numbersObjet))
      setNewName('')
    }
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App