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
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <div>YouTube Search</div>
            {videos && 
            videos.slice(0, 5).map((video, index) => 
            <p key={index}>{htmlUnescape(video.snippet.title)}</p>)
            }
        </>
    )
}
