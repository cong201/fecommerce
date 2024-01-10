import React from 'react'
import './Offer.css'
import exclucive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Click Now!</button>
      </div>
      <div className="offer-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
