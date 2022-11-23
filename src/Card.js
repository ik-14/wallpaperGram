import React from 'react'

export default function Card({userInfo}) {
  const {name, src, likes} = userInfo
  return (
    <section>
      <div className='card'>
    <h1>{name}</h1>
    <img src={src}/>
    <h3>{likes}</h3>
      </div>
    </section>
    )
}