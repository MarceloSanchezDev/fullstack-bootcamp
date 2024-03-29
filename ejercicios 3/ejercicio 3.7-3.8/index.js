const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan("common"))

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



app.get('/api/persons',( req,res )=>{
    res.json(persons)
})
app.get('/info', (req, res) => {
    res.send('<h1>Phone book has info for 2 people</h1><br/>')
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
const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }
app.post('/api/persons',(req,res)=> {
    const body = req.body
    if(!body.name){
        return res.status(400).json({
            error:'name missing'
        })
    }
    if(!body.number){
        return res.status(400).json({
            error:'number missing'
        })
    }
    if(persons.find(person=> person.name === body.name)){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
    const person ={
        name: body.name,
        number: body.number,
        id: generateId(),
    }
    persons = persons.concat(person)
    res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})