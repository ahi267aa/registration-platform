import React from 'react'
import "./HomeImg.css"
import PhotoImg from '../homepage-image.jpg';

const HomeImg = () => {
  return (
    <div className='Photo'>
        <img
            src={PhotoImg}
        >
        </img>
    </div>
  )
}

export default HomeImg