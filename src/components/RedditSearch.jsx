import { useEffect, useState } from 'react'

export default function RedditSearch({ searchTerm, trigger }) {

    const [redditPosts, setRedditPosts] = useState(null)
    const [maxResults, setMaxResults] = useState(5)

    async function getRedditPosts() {
        if (!searchTerm) {
            return
        } else {
            try {
                await fetch(`https://www.reddit.com/r/subreddit/search.json?q=${searchTerm}`)
                .then(response => response.json())
                .then(data => setRedditPosts(data.data.children))
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getRedditPosts()
    }, [trigger])

    return (
      <>
        <div className="">
            <h1 className="text-[26px] px-2 bg-redditRed text-white rounded-r-lg">Reddit</h1>
            {redditPosts && 
            redditPosts.slice(0, maxResults).map((post, index) =>
            <div className="py-2 px-2 gap-2 bg-gray-100 my-3 text-black">
                <p key={index}>{post.data.title}</p>
            </div>)}
        </div>
      </>
    )
}
