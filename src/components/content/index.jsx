import React from 'react'
import { Route } from 'react-router-dom'

import { Banner } from './components/banner'
import { Footer } from './components/footer'
import { MenuLink } from './components/menu-link'
import { Slogan } from './components/slogan'
import { Shopping } from './components/shopping'

export const Content = () => (
  <div className="mt-navbar-mobile sm:mt-navbar overflow-y-scroll">
    <Route path="/" exact>
      <Banner />
      <MenuLink />
      <Slogan />
      <Shopping />
      <Footer />
    </Route>
  </div>
)
