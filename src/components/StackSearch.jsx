import React, { useEffect, useState } from 'react'

export default function StackSearch({searchTerm, trigger}) {

    const [ stackResults , setStackResults] = useState(null)

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
        <div className="bg-blue-800">
            <div className="text-[26px]">StackSearch</div>
            {stackResults && 
            stackResults.slice(0, 5).map((entry, index) =>
                <p key={index}>{entry.title}</p>)}
        </div>
        </>
    )
}
