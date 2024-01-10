import React from 'react'
import './newLetter.css'

const NewLetter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email' />
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default NewLetter
