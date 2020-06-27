import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'

export const componentConfigs = [
  {
    path: '/',
    title: 'Home',
    icon: <HomeIcon />
  },
  {
    path: '/about',
    title: 'About',
    icon: <MailIcon />
  },
  {
    path: '/users',
    title: 'Users',
    icon: <InboxIcon />
  },
]