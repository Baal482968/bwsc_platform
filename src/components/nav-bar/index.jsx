import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import juluLogo from './julu-logo.png'

const useStyles = makeStyles(theme => {
  const { color: { navBackgroundColor, primaryColor } } = theme
  return ({
    appBar: {
      backgroundColor: navBackgroundColor,
      color: primaryColor,
    },
    menuRoot: {
      '& .MuiPaper-root': {
        backgroundColor: '#1F0B00',
        color: '#FFFFFF',
        width: 168,
        opacity: 0.86,
      },
    },
    navContainer: {
      height: 80,
      display: 'flex',
      alignItems: 'center',
    },
    navbarLogo: {
      width: 62,
      height: 62,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    textButton: {
      marginRight: 24,
    },
  })
})

const TITLE_TEXT = 'JULU CAFE'

export const NavBar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <Grid
            container
            justify="space-between"
          >
            <Grid item className={classes.navContainer}>
              <div>
                <img
                  className={classes.navbarLogo}
                  src={juluLogo}
                  alt="julu-logo"
                  srcSet=""
                />
              </div>
              <div>
                <Typography className={classes.title}>
                  {TITLE_TEXT}
                </Typography>
              </div>
            </Grid>
            <Grid item className={classes.navContainer}>
              <div className={classes.textButton}>
                <Button>
                  <Typography className={classes.title}>
                    首頁
                  </Typography>
                </Button>
              </div>
              <div className={classes.textButton}>
                <Button
                  onClick={handleClick}
                >
                  <Typography className={classes.title}>
                    MENU
                  </Typography>
                </Button>
              </div>
              <div className={classes.textButton}>
                <Button>
                  <Typography className={classes.title}>
                    咖啡豆訂單
                  </Typography>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu
        className={classes.menuRoot}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 64,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
