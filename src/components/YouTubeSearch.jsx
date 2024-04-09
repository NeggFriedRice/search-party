import { useEffect, useState } from 'react'
import { htmlEscape, htmlUnescape } from 'escape-goat'

export default function YouTubeSearch({ searchTerm, trigger }) {

    const [videos, setVideos] = useState(null)
    const [maxResults, setMaxResults] = useState(5)

    useEffect(() => {
        searchYoutube()
    }, [trigger])

    async function searchYoutube() {
        if (!searchTerm) {
            return
        } else {
            try {
                await fetch(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=${searchTerm}&type=video&part=snippet&maxResults=50`)
                .then(response => response.json())
                .then(data => setVideos(data.items))
            } catch (err) {
                console.log(err)
            }
        }
    }

    function increaseMaxResults() {
        setMaxResults(maxResults + 5)
    }

    return (
        <>
            <div className="">
                <h1 className="text-[26px] px-2 bg-red-500 text-white rounded-r-lg">YouTube</h1>
                {videos && 
                videos.slice(0, maxResults).map((video, index) => 
                <div className="flex p-2 place-items-center gap-2 bg-slate-200 my-3 text-black">
                    <img src={`https://img.youtube.com/vi/${video.id.videoId}/default.jpg`}/>
                    <p key={index}>{htmlUnescape(video.snippet.title)}</p>
                </div>)}
                {videos &&
                <button 
                onClick={increaseMaxResults} 
                className="bg-slate-500 px-2 rounded-lg m-2">
                    More
                </button>
                }
            </div>
        </>
    )
}
