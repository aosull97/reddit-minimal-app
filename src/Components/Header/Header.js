import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='title-left'>
            <h2>RedditMinimal</h2>
        </div>
        <div className='searchBar-centre'>
            <input type='text' ></input>
        </div>
        <div className='right'></div>
    </div>
  )
}

export default Header;
