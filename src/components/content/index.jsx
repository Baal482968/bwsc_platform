import React from 'react'
import { Footer } from '../footer'
import HomePageImage from './homepage.jpg'
import PouroverImage from './pourover.jpg'
import CakeImage from './cake.jpg'

export const Content = () => (
  <div className="h-content overflow-y-scroll">
    {/* home page index section */}
    <div className="relative w-screen h-slogan-section">
      <img
        src={HomePageImage}
        alt="homepage"
        className="absolute w-full h-full object-cover z-0 opacity-90"
      />
      <div className="absolute bg-gray-800 bg-opacity-60 text-white text-5xl right-16 top-24 z-10 p-8 rounded shadow-xl">
        <div className="my-4 tracking-widest">帶著家的感覺</div>
        <div className="my-4 tracking-widest">隨性玩咖啡</div>
      </div>
    </div>
    {/* category section */}
    <div className="flex w-screen justify-center items-center py-12">
      <div className="w-1/4 mx-4">
        <div className="text-center mb-2 text-xl">咖啡 Coffee</div>
        <img
          className="h-80 w-full object-cover"
          src={PouroverImage}
          alt="pourover"
        />
      </div>
      <div className="w-1/4 mx-4">
        <div className="text-center mb-2 text-xl">糕點 Cakes</div>
        <img className="h-80 w-full object-cover" src={CakeImage} alt="cake" />
      </div>
    </div>
    {/* about us section */}
    <div className="text-center py-12 px-36">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    {/* shopping section */}
    <div className="flex justify-center items-center h-shopping-section bg-shopping-background">
      <button className="p-4 text-xl bg-gray-200 text-gray-800" type="button">
        咖啡豆單
      </button>
    </div>
    {/* footer section */}
    <Footer />
  </div>
)
