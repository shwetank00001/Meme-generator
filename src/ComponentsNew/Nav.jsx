import React from 'react'
import Troll from '../troll.png'
import './nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
      <img className='trollImg' src={Troll} alt="troll-img"/>
      <h2>Meme Generator</h2>
    </div>
  )
}

export default Nav