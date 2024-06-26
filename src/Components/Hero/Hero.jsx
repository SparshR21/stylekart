import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <Link to="/new-collections">Latest Collections</Link>
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