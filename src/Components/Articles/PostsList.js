import React from 'react'
import Post from '../Post/Post'

const PostsList = ({articles}) => {
  return (
    <div>
       {
          (articles != null) ? articles.map((article, index) => <Post key={index} article={article}/>) : ''
        }
    </div>
  )
}

export default PostsList
