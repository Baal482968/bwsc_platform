import React from 'react'
import { Box } from '@material-ui/core'

import LogoImage from './julu.jpg'

export const Navbar = () => {
  const handleClick = (type) => {
    const targetElement = document.getElementById(type)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }
  return (
    <div className="flex items-center justify-between px-4 sm:px-8 h-navbar-mobile sm:h-navbar bg-white border-b-2 border-gray-100 shadow">
      <div className="flex items-center">
        <img className="w-12 sm:w-20 h-12 sm:h-20" src={LogoImage} alt="" />
        <div className="text-gray-600 font-medium text-md sm:text-2xl ml-2 sm:ml-4">
          Julu Cafe
        </div>
      </div>
      <div className="flex">
        <Box
          className="mx-2 sm:mx-4 text-sm sm:text-lg cursor-pointer"
          onClick={() => handleClick('shopping')}
        >
          咖啡豆
        </Box>
        <Box
          className="mx-2 sm:mx-4 text-sm sm:text-lg cursor-pointer"
          onClick={() => handleClick('about-us')}
        >
          關於我們
        </Box>
      </div>
    </div>
  )
}
