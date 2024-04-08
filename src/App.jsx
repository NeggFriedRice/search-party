import { useState, useEffect } from 'react'
import StackSearch from './components/StackSearch'

function App() {

  const [ searchTerm, setSearchTerm ] = useState("")
  const [ trigger, setTrigger] = useState(false)

  // Re-run API call with new search term
  function searchSubmit(event) {
    event.preventDefault()
    setTrigger(state => !state)
  }

  // Handle search term input
  function inputChangeHandler(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <p>Hello</p>
      <form onSubmit={searchSubmit}>
        <input type="text" placeholder="Search here" value={searchTerm} onChange={inputChangeHandler}></input>
        <button type="submit">Search</button>
      </form>
      <StackSearch searchTerm={searchTerm} trigger={trigger} />
    </>
  )
}

export default App
