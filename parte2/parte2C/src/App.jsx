import {useEffect, useState } from 'react'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [loading, setLoading] = useState(false) 

useEffect(()=>{
  setLoading(true)
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response)=> response.json())
  .then((json)=>{
    setNotes(json)
    setLoading(false)
  })
},[])


  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      title: newNote,
      body: newNote,
      important: Math.random() < 0.5,
      id: notes.length +1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "loading..." : ""}
      <ol>
        {notes.map(note => 
          <Note key={note.id} {...note} />
        )}
      </ol>
      <form onSubmit={addNote}>

        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App 
