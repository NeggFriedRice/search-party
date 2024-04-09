import { useEffect, useState } from 'react'

export default function RedditSearch({ searchTerm, trigger }) {

    const [redditPosts, setRedditPosts] = useState(null)

    async function getRedditPosts() {
        if (!searchTerm) {
            return
        } else {
            try {
                await fetch('https://www.reddit.com/r/subreddit/search.json?q=useeffect not working')
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
        <div className="bg-blue-800">
            <div className="text-[26px]">RedditSearch</div>
            {redditPosts && 
            redditPosts.slice(0, 5).map((post, index) =>
                <p key={index}>{post.data.title}</p>)}
        </div>
      </>
    )
}
