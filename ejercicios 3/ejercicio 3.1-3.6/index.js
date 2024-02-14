const express = require('express')

persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const app = express()

app.get('/api/persons',( req,res )=>{
    res.json(persons)
})
app.get('/info', (req, res) => {
    res.send('<h1>Phonebook has info for 2 people</h1><br/>')
})
app.get('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    const person = persons.find(person=> person.id === id)
    if(!person){
        res.status(404)
    }
    res.json(person)
})
app.delete('/api/persons/:id',(req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})