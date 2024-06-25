import React from 'react'
import LeftAbout from './AboutComponent/LeftAbout'
import RightAbout from './AboutComponent/RightAbout'

function About() {
  return (
    <>
        <div className='aboutSection w-full flex h-[100vh] px-30 py-0 bg-white'>
            <LeftAbout />
            <RightAbout />
        </div>
    </>
  )
}

export default About