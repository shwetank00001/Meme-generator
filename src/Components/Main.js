import React from 'react'
import '../Style/Main.css'

const Main = () => {

  const[memeImage, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/261o3j.jpg"
  })


  const [allMeme, setAllMeme]= React.useState([])
  

  function handleClick(){
    const randomNum = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[randomNum].url
    setMeme(function(item){
      return {
        ...item,
        randomImage : url
      }
    })

  }

  function handleChange(event){
    const {name,value} = event.target
    setMeme(function(item){
      return{
        ...item,  
        [name] : value

      }
    })
  }

        React.useEffect(function(){
            fetch("https://api.imgflip.com/get_memes")
              .then(res => res.json())
              .then(item => setAllMeme(item.data.memes))

            // .then(function(res){
            //   return res.json()
            // })

            // .then(function(item){
            //   return console.log(item)
            // }
            console.log("state active")

        },[memeImage])

  return (
    <main>
      <div  className='form'>
        <input type="text" placeholder= 'Top text' className='form-input' name='topText' value={memeImage.topText} onChange={handleChange}/>
        <input type="text" placeholder= 'Bottom text' className='form-input' name='bottomText' value={memeImage.bottomText} onChange={handleChange}/>

        <button onClick={handleClick} className='form-button'>Get a new meme image</button>

        <div className='meme'>
          <img src={memeImage.randomImage} className="meme-image"/>
          <h2 className='meme-text top'>{memeImage.topText}</h2>
          <h2 className='meme-text bottom'>{memeImage.bottomText}</h2>
        </div>

      </div>

        
    </main>
  )
}
export default Main;

/* <div className='div-secondary-input'>
            <input type="text"></input>
            <input type="text"></input>
        </div>
        <div className='div-button'>
            <button>Get a new MEME image ®</button>
        </div> */