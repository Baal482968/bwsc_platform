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
    <div className="py-12 px-36">
      <Divider />
      <div className="my-1 text-xl">
        &nbsp;&nbsp;&nbsp;&nbsp;位於四周環山的南投埔里小鎮，優質的地理環境孕育出鉅鹿莊園，有老闆及父母親一起田間管理及種植咖啡樹，皆由人工精選咖啡豆、乾燥、保存、烘培，而由來的鉅鹿莊園咖啡豆，為了讓更多饕客認識鉅鹿莊園，故成立
        Julu Cafe。
      </div>
      <div className="my-1 text-xl">
        &nbsp;&nbsp;&nbsp;&nbsp;Julu Cafe
        給您帶著家的感覺，隨性玩咖啡，分享及交流在家栽種的咖啡豆及世界知名莊園咖啡豆，並提供手工烘培點心。
      </div>
    </div>
    <Shopping />
    <Footer />
  </div>
)
