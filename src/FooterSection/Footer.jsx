import React from 'react'
import Rightfooter from './FooterComponents/Rightfooter'
import Leftfooter from './FooterComponents/Leftfooter'

function Footer() {
  return (
    <>
    <div className="full w-full flex h-[80vh] px-10 bg-white sticky bottom-0 z-[-1]">
        <Leftfooter />
        <Rightfooter />
    </div>
    </>
)
}

export default Footer