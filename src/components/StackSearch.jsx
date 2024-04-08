import React, { useEffect, useState } from 'react'

export default function StackSearch({stackResults}) {

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
