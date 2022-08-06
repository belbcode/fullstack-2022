import { useState } from 'react'

const Names = (props) => {
  const listOfPeeps = props.people.map((person, index) => {
    return <div key = {person.name}>{person.name}</div>
  })
  return listOfPeeps
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    for(let person of persons) {
      if(person.name === newName) {
        alert('No duplicates')
        return
      }
    }
    setPersons(persons.concat({name: newName}))
  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                  value = {newName}
                  onChange = {handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Names people = {persons}/>
    </div>
  )
}

export default App