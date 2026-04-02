import React, { useState , useEffect } from "react"
import axios from 'axios'



const Feed = () => {

    const [posts, setPost] = useState([
        {
            _id: "1",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP2WTTlLw-A8nQEw2g_JxPHVNh3XCo1Oc0A&s",
            caption: "This is Lovely Proffesional Univeristy"
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3600/posts')
        .then((res) => {
            setPost(res.data.posts)
        })
    },[])


    return (
        <section className="feed-section">
            <h1> Feed </h1>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="postcard">
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )
            }
        </section>
    )
}

export default Feed