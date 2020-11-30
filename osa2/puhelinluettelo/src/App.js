import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('add new person')
    const [newNumber, setNewNumber] = useState('add number')
    const [myString, setNewString] = useState('')

    // Use Effect hook to fetch initial data from JSON server
    useEffect(() => {
        console.log('effect')
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
          })
      }, [])

    const addPerson = (event) => {
        event.preventDefault()

        // Did not get array.include() working, so implemented
        // with forEach loop
        let found = false
        persons.forEach(function (item, index, array) {
            console.log("item-index ", item, index)
            if (item.name === newName) {
                found = true
            }
        })

        if (found) {
            console.log("FOUND!")
            alert(`${newName} already added to phonebook`)
        } else {
            const nameObject = {
                name: newName,
                number: newNumber
                //id: persons.length + 1,
            }
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        // console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleStringChange = (event) => {
        // console.log(event.target.value)
        setNewString(event.target.value)
    }

    const personsToShow = myString.length > 0
        ? persons.filter(person => person.name.toUpperCase().includes(myString.toUpperCase()))
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter myString={myString} handleStringChange={handleStringChange} />

            <h2>add a new</h2>
            <PersonForm
                addPerson={addPerson}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App