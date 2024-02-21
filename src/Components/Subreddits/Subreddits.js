import './Subreddits.css';
import React from 'react'

const Subreddits = ({article}) => {
  return (

      <div className='subreddit'>
        <h4>{article.data.subreddit}</h4>
      </div>
  )
}

export default Subreddits;


