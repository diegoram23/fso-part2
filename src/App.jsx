import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleSubmitPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name === newName)

    if (duplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      addName()
    }
  }

  const addName = () => {
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchResults(event.target.value)
  }

  const searchMatch = persons.filter(person => person.name.toLowerCase().includes(searchResults.toLowerCase()))
  searchMatch ? searchMatch : persons

  return (
    <div>
      <Filter
        type='text'
        valueSearch={searchResults}
        handleSearchChange={handleSearchChange}
      />
      <PersonForm
        handleSubmitPerson={handleSubmitPerson}
        valueName={newName}
        handleNameChange={handleNameChange}
        valueNumber={newNumber}
        handleNumberChange={handleNumberChange}
        type='submit' />

      <Persons searchMatch={searchMatch} />
    </div>
  )
}

export default App;