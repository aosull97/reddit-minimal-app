import React, {useState, useEffect} from 'react'
import Header from './Components/Header/Header'
import SubredditsList from './Components/SubredditsList/SubredditsList'
import PostsList from './Components/Articles/PostsList'
import './App.css'


const App = () => {
  const [articles, setArticles] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  

  useEffect(() => {
    fetch('https://www.reddit.com/r/popular/.json').then(res => {
      if(res.status != 200){
        console.log('ERROR');
        return; 
      }

      res.json().then(data => {
        if(data != null){
          console.log(data.data.children);
          setArticles(data.data.children);
        }
      })
    })
  }, []);

  const onSubredditClick = () => {
    
  }


  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='content'>
        <div className='subreddits-list'>
          <SubredditsList articles={articles} />
        </div>
        
        <div className='posts-list'>
          <PostsList articles={articles} />
        </div>
      </div>
    </div>
  )
}

export default App
