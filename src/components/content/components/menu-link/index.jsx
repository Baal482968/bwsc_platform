import React from 'react'
import { MenuCard } from './menu-card'
import PouroverImage from './assets/pourover.jpg'
import CakeImage from './assets/cake.jpg'

export const MenuLink = () => (
  <>
    <div className="mt-8 sm:mt-12 lg:mt-24 mb-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center underline">
      Menu
    </div>
    <div className="flex w-screen justify-center items-center py-4 sm:py-12 flex-col sm:flex-row">
      <MenuCard
        cardTitle="手沖咖啡"
        imageAlt="pourover"
        imageSrc={PouroverImage}
      />
      <MenuCard cardTitle="手工糕點" imageAlt="cakes" imageSrc={CakeImage} />
    </div>
  </>
)
