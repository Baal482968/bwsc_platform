import React, { useContext } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { NavList } from './nav-list'
import { NavDrawerContext } from '../../configs/contexts.config'

export const NavDrawer = () => {
  const [isNavDrawerOpen, toggleisNavDrawerOpen] = useContext(NavDrawerContext)

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    toggleisNavDrawerOpen(open)
  }

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={isNavDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <NavList handleClose={toggleDrawer(false)} />
      </SwipeableDrawer>
    </div>
  )
}