import React from 'react'
import HomePageImage from './assets/homepage.jpg'

export const Banner = () => {
  const bannerTextStyle = 'my-1 sm:my-3 md:my-4 tracking-widest'
  return (
    <div className="relative w-screen h-slogan-section">
      <img
        src={HomePageImage}
        alt="homepage"
        className="absolute w-full h-full object-cover z-0 opacity-90"
      />
      <div className="absolute bg-gray-800 bg-opacity-60 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl left-1/10 top-1/20 sm:top-1/10 z-10 p-2 sm:p-4 md:p-8 rounded shadow-xl">
        <div className={bannerTextStyle}>帶著家的感覺</div>
        <div className={bannerTextStyle}>隨性玩咖啡</div>
      </div>
    </div>
  )
}
