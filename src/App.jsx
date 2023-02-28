import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNumber: 360 - 653 - 2432,
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()

    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const duplicate = persons.find(person => person.name === newName)

    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNameChange}
          />
          <div>
            Phone: <input
              value={newNumber}
              onChange={handleNumberChange} />
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <h5 key={person.id}>{person.name} {person.number}</h5>)}
    </div>
  )
}

export default App;