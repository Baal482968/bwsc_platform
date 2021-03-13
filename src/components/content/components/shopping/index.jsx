import React, { useState } from 'react'

import { useDetectMobile } from '../../../../custom-hook/useDetectMobile'
import ShoppingBackgroundImage from './assets/shopping-background.jpg'

export const Shopping = () => {
  const isMobile = useDetectMobile()
  const [showLink, setshowLink] = useState(false)
  const handleMouseEnter = () => {
    if (!isMobile) setshowLink(true)
  }
  const handleMouseLeave = () => {
    if (!isMobile) setshowLink(false)
  }
  return (
    <div
      id="shopping"
      className="relative w-screen h-shopping-section-mobile sm:h-shopping-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={ShoppingBackgroundImage}
        alt="shopping"
        className="absolute object-cover w-full h-full"
      />
      {(showLink || isMobile) && (
        <div className="absolute flex items-center text-white justify-center w-full h-full bg-yellow-500 bg-opacity-10 cursor-pointer">
          <a
            className="text-2xl sm:text-3xl md:text-5xl border-gray-100 border p-3 sm:p-5 rounded hover:bg-gray-300 hover:bg-opacity-20"
            href="https://docs.google.com/spreadsheets/d/1-D07g3LoN2ZhgGPNYAV3Q7o0Lc9ZNEiIhcKK_nqFbOk/edit?fbclid=IwAR0tiOABE0CpLTGot0C1IAWLb5jiDFvEl8uscIWaT5M_mulW-Dy9bqc-c_8#gid=0"
            target="_blank"
            rel="noreferrer"
          >
            咖啡豆單
          </a>
        </div>
      )}
    </div>
  )
}
