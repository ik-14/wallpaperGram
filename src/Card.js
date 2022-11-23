import React from 'react'

export default function Card({userInfo}) {
  const {name, src, likes, id} = userInfo
  return (
          <div key={userInfo.id} className='cards'>
            <div className='overlayContainer'>
            <img src={userInfo.src} className='image'/>
            <div className='over'><a target='blank' href={userInfo.src}>image link</a>
            <br/>
            <h2>likes : {userInfo.likes}</h2>
            </div>
            </div>
            <div className='buttonCont'>
            <h1>{userInfo.name}</h1>
            </div>
            </div>
    )
}