import React from 'react'

import { Footer } from './components/footer'
import { Divider } from './components/divider'
import { MenuCard } from './components/menu-card'
import { Shopping } from './components/shopping'
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
      <div className="absolute bg-gray-800 bg-opacity-60 text-white text-5xl left-1/10 top-1/8 z-10 p-8 rounded shadow-xl">
        <div className="my-4 tracking-widest">帶著家的感覺</div>
        <div className="my-4 tracking-widest">隨性玩咖啡</div>
      </div>
    </div>
    {/* category section */}
    <div className="mt-24 mb-0 text-5xl text-center underline">Menu</div>
    <div className="flex w-screen justify-center items-center py-12">
      <MenuCard
        cardTitle="手沖咖啡"
        imageAlt="pourover"
        imageSrc={PouroverImage}
      />
      <MenuCard cardTitle="手工糕點" imageAlt="cakes" imageSrc={CakeImage} />
    </div>
    {/* about us section */}
    <div className="text-center py-12 px-36">
      <Divider />
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
    <Shopping />
    <Footer />
  </div>
)
