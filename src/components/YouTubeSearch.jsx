import { useEffect, useState } from 'react'
import { htmlEscape, htmlUnescape } from 'escape-goat'

export default function YouTubeSearch({ searchTerm, trigger }) {

    const [videos, setVideos] = useState(null)

    useEffect(() => {
        searchYoutube()
    }, [trigger])

    async function searchYoutube() {
        if (!searchTerm) {
            return
        } else {
            try {
                await fetch(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=${searchTerm}&type=video&part=snippet&maxResults=10`)
                .then(response => response.json())
                .then(data => setVideos(data.items))
                console.log(videos)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <div className="">
                <h1 className="text-[26px]">YouTube Search</h1>
                {videos && 
                videos.slice(0, 5).map((video, index) => 
                <div className="flex">
                <img src={`https://img.youtube.com/vi/${video.id.videoId}/default.jpg`}/>
                <p key={index}>{htmlUnescape(video.snippet.title)}</p>
                </div>)
                }
            </div>
        </>
    )
}
