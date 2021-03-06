import React from 'react'
import LogoImage from './julu.jpg'

export const Navbar = () => (
  <div className="flex items-center justify-between px-4 sm:px-8 h-navbar-mobile sm:h-navbar bg-white border-b-2 border-gray-100 shadow">
    <div className="flex items-center">
      <img className="w-12 sm:w-20 h-12 sm:h-20" src={LogoImage} alt="" />
      <div className="text-gray-600 font-medium text-md sm:text-2xl ml-2 sm:ml-4">
        Julu Cafe
      </div>
    </div>
    <div className="flex">
      <div className="mx-2 sm:mx-4 text-sm sm:text-lg">咖啡豆</div>
      <div className="mx-2 sm:mx-4 text-sm sm:text-lg">關於我們</div>
    </div>
  </div>
)
