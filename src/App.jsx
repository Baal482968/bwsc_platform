import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import {
  CssBaseline,
  Container,
  Box,
} from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

import { NavBar } from './components/nav-bar'
import { NavDrawer } from './components/nav-drawer'
import { Home } from './components/home'
import { About } from './components/about'
import { Users } from './components/users'
import { themeGenerator } from './configs/muiTheme.config'
import {
  ThemeColorContext,
  NavDrawerContext,
} from './configs/contexts.config'

const useStyles = makeStyles(theme => ({
  contentContainer: {
    backgroundColor: theme.color.sideBackgroundColor,
  },
  contentSection: {
    backgroundColor: theme.color.contentBackgroundColor,
    minHeight: 'calc(100vh - 80px)',
    paddingTop: theme.spacing(2),
  },
}))

const App = () => {
  const [themeColor, togglethemeColor] = useState('bright')
  const [isNavDrawerOpen, toggleisNavDrawerOpen] = useState(false)
  const theme = themeGenerator(themeColor)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeColorContext.Provider value={[themeColor, togglethemeColor]}>
        <NavDrawerContext.Provider value={[isNavDrawerOpen, toggleisNavDrawerOpen]}>
          <Render />
        </NavDrawerContext.Provider>
      </ThemeColorContext.Provider>
    </ThemeProvider>
  )
}

const Render = () => {
  const classes = useStyles()
  return (
    <Router>
      <NavBar />
      <NavDrawer />
      <Box className={classes.contentContainer}>
        <Container
          maxWidth="md"
          className={classes.contentSection}
        >
          <Box>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Box>
        </Container>
      </Box>
    </Router>
  )
}

export default App
