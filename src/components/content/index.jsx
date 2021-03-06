import React from 'react'

import { Banner } from './components/banner'
import { Footer } from './components/footer'
import { Menu } from './components/menu'
import { Slogan } from './components/slogan'
import { Shopping } from './components/shopping'

export const Content = () => (
  <div className="h-content overflow-y-scroll">
    <Banner />
    <Menu />
    <Slogan />
    <Shopping />
    <Footer />
  </div>
)
