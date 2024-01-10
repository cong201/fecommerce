import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/newCollection/newCollection'
import NewLetter from '../components/newLetter/newLetter'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewLetter/>
    </div>
  )
}

export default Shop
