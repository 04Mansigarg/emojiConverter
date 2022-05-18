import React, { useState } from 'react'
import styles from "./Converter.module.css"

export const Post = () => {
  const [posts, setPosts] = useState([])
  React.useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then(res => res.json())
      .then(res => setPosts(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className={styles.postHeading} >Hello! Here are my all Posts</h1>
      <div className={styles.postContainer}>
        {posts.map(item => {
          return <h5 key={item._id}>{item.textInput}</h5>
        })
        }

      </div>
    </div>

  )
}
