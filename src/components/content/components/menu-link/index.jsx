import React from 'react'
import CoffeeImage from './assets/coffee.jpg'
import LatteImage from './assets/latte.jpg'
import CakeImage from './assets/cake.jpg'
import CinnamonRollImage from './assets/cinnamonroll.jpg'
import TeaImage from './assets/tea.jpg'
import BagelImage from './assets/bagel.jpg'

export const MenuLink = () => (
  <div className="px-10 md:px-40 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-mobile-menu-link md:h-full">
        <div className="relative w-full h-1/2 md:h-2/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              單品咖啡
            </p>
          </div>
          <img
            src={CoffeeImage}
            alt="coffee"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative w-full h-1/2 md:h-1/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              糕點
            </p>
          </div>
          <img
            src={CakeImage}
            alt="cake"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-mobile-menu-link md:h-full">
        <div className="relative w-full h-1/2 md:h-1/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              肉桂捲
            </p>
          </div>
          <img
            src={CinnamonRollImage}
            alt="cinnamon-roll"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative w-full h-1/2 md:h-2/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              義式咖啡
            </p>
          </div>
          <img
            src={LatteImage}
            alt="latte"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="h-mobile-menu-link md:h-full">
        <div className="relative w-full h-1/2 md:h-2/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              茶飲
            </p>
          </div>
          <img
            src={TeaImage}
            alt="tea"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative w-full h-1/2 md:h-1/3">
          <div className="absolute hover:bg-gradient-to-b opacity-50 from-gray-500 to-black h-full w-full z-10">
            <p className="flex justify-center items-end pb-6 opacity-0 text-white text-lg font-bold hover:opacity-100 w-full h-full">
              貝果
            </p>
          </div>
          <img
            src={BagelImage}
            alt="bagel"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
)
