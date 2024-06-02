import React from 'react'
import './hero.css'
import heroimage from '../../asset/images/counter-timer-img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div>
            <h6 className="hero-t">New Sale</h6>
            <h1 className="hero-sale">50% SALE</h1>
            <p  className="hero-dec">Get sale for your pay now </p>
      </div>
      <img src={heroimage} alt=""/>
    </div>
  )
}

export default Hero
