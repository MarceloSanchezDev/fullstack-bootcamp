import { useState } from "react";

function searchName(array, name) {
  const findName = array.find((arr) => arr.name === name);
  return findName;
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personSearch, setPersonSearch] = useState("");

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangePersonSearch = (e) => {
    const search = e.target.value;
    const personFind = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setPersonSearch(personFind);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const numbersObjet = {
      name: newName,
      number: newNumber,
      id: persons.length + 1 
    };
    if (searchName(persons, newName)) {
      alert(`${newName}, already exist`);
    } else {
      setPersons(persons.concat(numbersObjet));
      setNewName("");
    }
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <div>
          filter shown with <input onChange={handleChangePersonSearch} />
          {personSearch ? (
            <div>
              {personSearch.map(person => <p key={person.id}>{person.name}/{person.number}</p>)}
            </div>
          ) : (
            <></>
          )}
        </div>
        <h2>Add a new</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input onChange={handleChangeName} value={newName} />
          </div>
          <div>
            number: <input onChange={handleChangeNumber} value={newNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) => (
            <li key={person.name}>
              {person.name}/{person.number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
