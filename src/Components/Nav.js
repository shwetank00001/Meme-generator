import React from 'react'
import '../Style/Nav.css'
import logo from '../troll.png'

const Nav = () => {
  return (
    <div className='div-nav'>
        <div className='div-nav-left'>
            <img src={logo} alt="troll"></img>
            <h2>Meme Generator</h2>
        </div>
        <p>React Course- Project 3</p>       
    </div>
  )
}

export default Nav