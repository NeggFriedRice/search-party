import { useState, useEffect } from 'react'
import StackSearch from './components/StackSearch'
import YouTubeSearch from './components/YouTubeSearch'
import RedditSearch from './components/RedditSearch'

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
    <div className="flex justify-center pt-8">
      <div className="w-[80%]">
        <div className="text-center py-3">
          <h1 className="text-[1.5rem]">Search Party</h1>
          <p>The best multi-website search...<em>probably</em></p>
        </div>
        <div className="flex justify-center">
          <form onSubmit={searchSubmit}>
            <input type="text" placeholder="Get ya search on! 🔎" value={searchTerm} onChange={inputChangeHandler} className="w-[50vw] h-[2rem] focus:h-[3rem] px-2 rounded-lg bg-setCol4 transition-all duration-300"></input>
            <button type="submit" className="mx-2 px-2 py-1 rounded-lg bg-setCol2">Search</button>
          </form>
       </div>
      <div className="grid grid-cols-3 gap-8 pt-8">
      <YouTubeSearch searchTerm={ searchTerm } trigger ={ trigger }/>
      <RedditSearch searchTerm={ searchTerm } trigger={ trigger } />
      <StackSearch searchTerm={ searchTerm } trigger={ trigger } />
      </div>
      </div>
    </div>
  )
}

export default App
