import {useEffect, useState } from 'react'
import Note from './components/Note'
import { getAllNotes } from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [loading, setLoading] = useState(false) 

useEffect(()=>{
  setLoading(true)
  getAllNotes()
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
      userId: 1,
    }
    createNote(noteObject).then((json) => setNotes(notes.concat(json))).catch((err)=> console.log(err));
    setNewNote('')
  }
  const handleNoteChange = (e) => {
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
