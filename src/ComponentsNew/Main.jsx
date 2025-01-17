import React from 'react'
import './main.css'
import memesData from '../memesData'

const Main = () => {

  const [imgData, setImgData] = React.useState()

  function randomMeme(){
    const image = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * image.length)
    console.log(randomIndex)
    const url = image[randomIndex].url
    console.log(url)

    setImgData(url)
  }

  return (
    <div>
      <div className='main'>
        <input placeholder='Top Text'/>
        <input placeholder='Bottom Text'/>
      </div>

      <img src={imgData } />

      <div className='buttonGen'>
        <button onClick={randomMeme}>Get a new meme image</button>
      </div>
    </div>
  )
}

export default Main