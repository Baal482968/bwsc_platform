import React from 'react'
import LogoImage from './julu.jpg'

export const Navbar = () => (
  <div className="flex items-center justify-between px-8 h-navbar bg-white border-b-2 border-gray-100">
    <div className="flex items-center">
      <img className="w-20 h-20" src={LogoImage} alt="" />
      <div className="text-gray-600 font-medium text-2xl ml-4">Julu Cafe</div>
    </div>
    <div className="flex">
      <div className="mx-4">咖啡豆</div>
      <div className="mx-4">關於我們</div>
    </div>
  </div>
)
