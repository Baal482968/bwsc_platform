import React from 'react'
import { Footer } from '../footer'
import HomePageImage from './homepage.jpg'
import PouroverImage from './pourover.jpg'
import CakeImage from './cake.jpg'

export const Content = () => (
  <div className="h-content overflow-y-scroll">
    {/* home page index section */}
    <div className="relative w-screen h-slogan">
      <img
        src={HomePageImage}
        alt="homepage"
        className="absolute w-full h-full object-cover z-0 opacity-90"
      />
      <div className="absolute bg-gray-800 bg-opacity-60 text-white text-5xl right-12 top-24 z-10 p-8 rounded shadow-xl">
        <div className="my-4 tracking-widest">帶著家的感覺</div>
        <div className="my-4 tracking-widest">隨性玩咖啡</div>
      </div>
    </div>
    {/* category section */}
    <div className="flex w-screen justify-center items-center py-12">
      <div className="w-1/4 mx-4">
        <img
          className="h-80 w-full object-cover"
          src={PouroverImage}
          alt="pourover"
        />
      </div>
      <div className="w-1/4 mx-4">
        <img className="h-80 w-full object-cover" src={CakeImage} alt="cake" />
      </div>
    </div>
    <Footer />
  </div>
)
