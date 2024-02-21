import React from 'react'
import Subreddits from '../Subreddits/Subreddits'

const SubredditsList = ({articles}) => {
  return (
    <div>
        <h3>Popular Subreddits</h3>
        {
          (articles != null) ? articles.map((article, index) => <Subreddits key={index} article={article}/>) : ''
        }
    </div>
  )
}

export default SubredditsList
