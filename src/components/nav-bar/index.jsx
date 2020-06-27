import React, { useState, useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'

import { NavDrawerContext } from '../../configs/contexts.config'
import { ToggleThemeButton } from '../toggle-theme-button'

const useStyles = makeStyles(theme => {
  const { color: { navBackgroundColor, sideBackgroundColor, primaryColor } } = theme
  return ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: navBackgroundColor,
      color: primaryColor,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    settingMenu: {
      backgroundColor: sideBackgroundColor,
    },
  })
})

export const NavBar = () => {
  const classes = useStyles()
  const [isNavDrawerOpen, toggleisNavDrawerOpen] = useContext(NavDrawerContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenuClick = () => toggleisNavDrawerOpen(!isNavDrawerOpen)
  const handleSettingClick = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BW-Cafe
          </Typography>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleSettingClick}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            className={classes.settingMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
          >
            <MenuItem><ToggleThemeButton /></MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}