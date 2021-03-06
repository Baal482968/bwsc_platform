import React from 'react'
import HomePageImage from './assets/homepage.jpg'

export const Banner = () => (
  <div className="relative w-screen h-slogan-section">
    <img
      src={HomePageImage}
      alt="homepage"
      className="absolute w-full h-full object-cover z-0 opacity-90"
    />
    <div className="absolute bg-gray-800 bg-opacity-60 text-white text-5xl left-1/10 top-1/8 z-10 p-8 rounded shadow-xl">
      <div className="my-4 tracking-widest">帶著家的感覺</div>
      <div className="my-4 tracking-widest">隨性玩咖啡</div>
    </div>
  </div>
)
