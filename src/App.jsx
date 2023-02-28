import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()

    const nameObj = {
      name: newName,
      id: persons.length + 1
    }

    const duplicate = persons.find(person => person.name === newName)

    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObj))
      setNewName('')
    }

  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        Name: <input
          value={newName}
          onChange={handleNameChange}
        />
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <h5 key={person.id}>{person.name}</h5>)}
    </div>
  )
}

export default App;