import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav__box">Description</div>
        <div className="descriptionbox-nav__box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Absolutely! Here it is: This ensemble features a rich navy blue suit exquisitely fashioned from durable fabric, intricately cut and sewn to precision. It's impeccably matched with a pristine white button-up shirt and sleek black leather shoes, culminating in an ensemble that exudes sophistication, confidence, and timeless elegance.</p>
        <p>This ensemble showcases a stunning navy blue suit tailored from premium, resilient fabric, harmoniously combined with a pristine white shirt and sleek black leather shoes, resulting in an ensemble that embodies both sophistication and enduring elegance, perfect for any formal occasion.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
