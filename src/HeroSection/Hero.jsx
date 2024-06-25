import React from 'react'
import Nav from './HeroComponents/Nav'
import Heading from './HeroComponents/Heading'
import HeroImage from './HeroComponents/HeroImage'

function Hero() {
  return (
    <>
        <div className='w-100 h-full bg-white relative'>
             <Nav />
            <Heading />
            <HeroImage />
        </div>
    </>
  )
}

export default Hero