import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas'
            // id: 1
        }
    ])
    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName
            //id: persons.length + 1,
        }

        setPersons(persons.concat(nameObject))
        setNewName('')
    }

    const handleNameChange = (event) => {
        // console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                name: <input value={newName}
                    onChange={handleNameChange}
                />
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.name} person={person} />
                )}
            </ul>
        </div>
    )

}

export default App