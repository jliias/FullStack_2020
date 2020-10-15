import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1231244'
            // id: 1
        }
    ])
    const [newName, setNewName] = useState('add new person')
    const [newNumber, setNewNumber] = useState('add number')

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

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number: <input value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <Person key={person.name} person={person}/>
            )}
        </div>
    )

}

export default App