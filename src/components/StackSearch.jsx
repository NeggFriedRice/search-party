import React, { useEffect, useState } from 'react'

export default function StackSearch({searchTerm, trigger}) {

    const [ stackResults , setStackResults] = useState(null)
    const [maxResults, setMaxResults] = useState(5)

    useEffect(() => {
        searchStack()
    }, [trigger])

    async function searchStack() {
        if (!searchTerm) {
          return
        } else {
          try {
            await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`)
            .then( data => data.json())
            .then( response => setStackResults(response.items))
            } catch (err) {
                console.log(err)
            }
        }
      }

    return (
        <>
        <div className="">
            <h1 className="text-[26px] px-2 bg-fallCol2 rounded-r-lg">Stack Overflow</h1>
            {stackResults && 
            stackResults.slice(0, maxResults).map((entry, index) =>
                <p key={index} className="py-2 px-2 gap-2 bg-gray-200 my-3 text-black">{entry.title}</p>)}
        </div>
        </>
    )
}
