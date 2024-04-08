import { useState, useEffect } from 'react'
import StackSearch from './components/StackSearch'

function App() {

  
  const [ stackResults , setStackResults] = useState(null)
  const [ searchTerm, setSearchTerm ] = useState(null)

  // useEffect(() => {
  //     searchStack()
  // }, [])

  async function searchStack() {
      try {
      await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`)
      .then( data => data.json())
      .then( response => setStackResults(response.items))
      } catch (err) {
          console.log(err)
      }
  }

  // Re-run API call with new search term
  function searchSubmit(event) {
    event.preventDefault()
    searchStack()
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
      <StackSearch stackResults={stackResults} />
    </>
  )
}

export default App
