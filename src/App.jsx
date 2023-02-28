import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('add a new name')


  const addName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObj))
    setNewName('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <h5 key={person.id}>{person.name}</h5>)}
    </div>
  )
}

export default App;