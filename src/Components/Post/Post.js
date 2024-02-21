import './Post.css'

import { FaUser, FaComment, FaArrowUp, FaArrowDown } from "react-icons/fa";

import React from 'react'


const Post = ({article}) => {

  function formatCompactNumber(number) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
  }


  return (
    <div className='articles'>
      <article>
        <div className='upvotes'>
          <FaArrowUp />
          <span className='upvote-amount'>{formatCompactNumber(article.data.ups)}</span>
          <FaArrowDown />
        </div>
        <div className='post'>
          <a href={'https://reddit.com' + article.data.permalink}>
          <h3>{article.data.title}</h3>
          </a>
          <img src={article.data.url} alt={article.data.author} width='100%' />
        </div>
      </article>
      <div className='article-info'>
        <div className='author-info'>
          <a href={'https://reddit.com/user/' + article.data.author}>
          <FaUser />
          </a>
          <span className='author'>{article.data.author}</span>
        </div>
        <div className='comments-overview'>
            <FaComment />
            <span className='num-comments'>{article.data.num_comments}</span>
        </div>

      </div>

      
      

    </div>
  )
}

export default Post


