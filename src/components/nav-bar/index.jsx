import React from 'react'
import LogoImage from './julu.jpg'

export const Navbar = () => (
  <div className="flex items-center justify-between px-8 h-28 bg-white border-b-2 border-gray-100">
    <div className="flex items-center">
      <img className="w-28 h-28" src={LogoImage} alt="" />
      <div className="text-gray-600 font-medium text-2xl ml-4">Julu Cafe</div>
    </div>
    <div>關於我們</div>
  </div>
)
