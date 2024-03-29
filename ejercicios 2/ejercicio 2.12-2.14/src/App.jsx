import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonFrom";
import Persons from "./components/Persons";
import { useEffect } from "react";
import { getAllContacts } from "./services/contacts/getAllContacts";
import { createContact } from "./services/contacts/createContact";
import { updateContact } from "./services/contacts/updateContact";

function searchName(array, name) {
  const findName = array.find((arr) => arr.name === name);
  return findName;
}
function searchId(array, name){
  const findId = array.find((arr) => arr.name === name)
  return findId.id
}



const App = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false)
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [personSearch, setPersonSearch] = useState("");

  useEffect( ()=> {
    getAllContacts()
        .then((json) => setPersons(json))
  },[])

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
      if(confirm(`${newName}, already exist, do you want to update`)){
        const id = searchId(persons, newName);
        updateContact(id , numbersObjet)
      }
    } else {
      createContact(numbersObjet).then(setPersons((contacts) => contacts.concat(numbersObjet)))
      setNewName("");
    }
  };

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter handle={handleChangePersonSearch} personSearch={personSearch}/>
        <h2>Add a new</h2>
        <PersonForm handlers={{handleChangeName,handleChangeNumber,handleSubmit}} person={{newName,newNumber}}  />
        <h2>Numbers</h2>
        {loading ? "loading..." : 
        <ul>
          {persons.map(person => <Persons key={person.id} {...person} />)}
        </ul>}
      </div>
    </>
  );
};

export default App;
