import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_imae from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand__icon'>
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest__btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_imae} alt="" />
        </div>
    </div>
  )
}

export default Hero
