import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  AppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core'
import juluLogo from './julu-logo.png'

const useStyles = makeStyles(theme => {
  const { color: { navBackgroundColor, primaryColor } } = theme
  return ({
    root: {},
    appBar: {
      backgroundColor: navBackgroundColor,
      color: primaryColor,
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
  })
})

const TITLE_TEXT = 'JULU CAFE'

export const NavBar = () => {
  const classes = useStyles()
  return (
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
            <div>
              <Button>首頁</Button>
            </div>
            <div>
              <Button>MENU</Button>
            </div>
            <div>
              <Button>咖啡豆訂單</Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
