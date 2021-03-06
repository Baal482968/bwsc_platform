import React from 'react'
import CoffeeImage from './assets/coffee.jpg'
import LatteImage from './assets/latte.jpg'
import CakeImage from './assets/cake.jpg'
import CinnamonRollImage from './assets/cinnamonroll.jpg'
import TeaImage from './assets/tea.jpg'
import BagelImage from './assets/bagel.jpg'

export const MenuLink = () => (
  <div className="px-40 py-20">
    <div className="grid grid-flow-row grid-cols-3 grid-rows-1 h-menu-link overflow-hidden">
      <div>
        <div className="h-2/3 object-fill">
          <img src={CoffeeImage} alt="coffee" />
        </div>
        <div className="h-1/3">
          <img src={CakeImage} alt="cake" />
        </div>
      </div>
      <div>
        <div className="h-1/3">
          <img src={CinnamonRollImage} alt="cinnamon-roll" />
        </div>
        <div className="h-2/3">
          <img src={LatteImage} alt="latte" />
        </div>
      </div>
      <div>
        <div className="h-2/3">
          <img src={TeaImage} alt="tea" />
        </div>
        <div className="h-1/3">
          <img src={BagelImage} alt="bagel" />
        </div>
      </div>
    </div>
  </div>
)
