import React, { useEffect, useState } from 'react'

export default function StackSearch() {

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
            <div>StackSearch</div>
            { stackResults && 
            stackResults.slice(0, 5).map((entry, index) =>
                <p key={index}>{entry.title}</p>)}
        </>
    )
}
