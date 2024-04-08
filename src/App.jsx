import { useState, useEffect } from 'react'
import StackSearch from './components/StackSearch'

function App() {

  
  const [ stackResults , setStackResults] = useState(null)

  useEffect(() => {
      searchStack()
  }, [])

  async function searchStack() {
      try {
      await fetch('https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=javascript&site=stackoverflow')
      .then( data => data.json())
      .then( response => setStackResults(response.items))
      } catch (err) {
          console.log(err)
      }
  }

  return (
    <>
      <p>Hello</p>
      <StackSearch stackResults={stackResults} />
    </>
  )
}

export default App
