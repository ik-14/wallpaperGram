import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'
const css = require('./App.css')


function App() {


  const [wallpapers, setWallpaper] = useState([])
  const [search, setSearch] = useState(wallpapers)
  function onSearch(value) {
    console.log(value)
    if(value == '') {
      console.log(wallpapers)
    }
    const newData = wallpapers.filter(current=> current.name.toLowerCase().includes(value.toLowerCase()))
    setSearch(newData)
  }

  const fetchData = async () => {
    const result = await fetch('wallpapers/get')
    const data = await result.json()
    setWallpaper(data)
  }
  
  
  useEffect(() => {
    fetchData()
  }, [])



  const get = async () => {
    fetchData()
  }

  const post = async () => {
    const nameinput = document.querySelector('#inputName')
    const srcinput = document.querySelector('#inputSrc')

    const result = await fetch('wallpapers/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        appName: nameinput.value,
        appSrc: srcinput.value
      })
  })
}


  return (
    <div className="App">
      <Header/>
      <article className='containerAll'>
      <div className='inputContainer'>
      <article className='inputForm'>
      <h2>name</h2>
      <input id='inputName' type='text'/>
      <h2>link</h2>
      <input id='inputSrc' type='text'/>
      </article>
      <article className='buttons'>
      <button onClick={post}>Post</button>
      <button onClick={get}>Get all</button>
      </article>
      <article className='searchFilter'>
      <label>Search for wallpaper</label>
      <input type='search' onChange={e=>onSearch(e.target.value)}/>

      {/* {
        wallpapers.filter((value) => {
          if (search == '') {
            return null
          } else if (
            value.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return value
          }
        }).map((value, key) => {
          return (
            <div key={key}>
              <p> {value.name} </p>
            </div>
          )
        })
      } */}
      </article>
      </div>
      </article>

      <article className='cardsContainer'>
      {search.map((customer, index) => (
        <Card userInfo={customer} key={index} />
      ))}
      {/* { */}
        {/* wallpapers.map(wallpaper => ( */}
          {/* <div key={wallpaper.id} className='cards'>
            <div className='overlayContainer'>
            <img src={wallpaper.src} className='image'/>
            <div className='over'><a target='blank' href={wallpaper.src}>image link</a>
            <br/>
            <h2>likes : {wallpaper.likes}</h2>
            </div>
            </div>
            <div className='buttonCont'>
            <h1>{wallpaper.name}</h1>
            </div>
            </div> */}
          {/* ))  */}
      {/* } */}
      </article>
    </div>
  );
}

export default App;