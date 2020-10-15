import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1231244'
            // id: 1
        },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('add new person')
    const [newNumber, setNewNumber] = useState('add number')
    const [myString, setNewString] = useState('')

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
            <div>
                Filter shown with <input value={myString}
                    onChange={handleStringChange}
                />
            </div>
            <h2>add a new</h2>
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
            {personsToShow.map(person =>
                <Person key={person.name} person={person} />
            )}
        </div>
    )

}

export default App