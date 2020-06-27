import React, { useContext } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

import {
  Avatar,
  Grid,
  Paper,
  Container,
  Typography,
  Divider,
} from '@material-ui/core'

import { makeStyles, withStyles } from '@material-ui/core/styles'

import { ThemeColorContext } from '../../configs/contexts.config'

import catMeme from './catmeme.jpg'
import './styles.css'

// Styled Component
const DividerWithMarginStyledComponent = styled(Divider)`
  margin: 12px 0px;
`

// HOC
const dividerStyles = {
  root: {
    margin: '12px 0px',
  }
}
const DividerWithMarginHoc = withStyles(dividerStyles)(Divider)

// Hook
const useStyles = makeStyles(theme => {
  const { color: { navDrawerBackgroundColor, primaryColor } } = theme
  return ({
    largeAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    paperContainer: {
      backgroundColor: navDrawerBackgroundColor,
      padding: theme.spacing(4),
    },
    divider: {
      margin: '12px 0px',
    },
    typographyText: {
      fontSize: 16,
      color: primaryColor,
    },
  })
})

export const Users = () => {
  const [themeColor,] = useContext(ThemeColorContext)
  const classes = useStyles()

  const isBright = themeColor === 'bright'
  return (
    <>
      <Container maxWidth="sm">
        <Paper className={classes.paperContainer}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={4} md={2}>
              <Avatar className={classes.largeAvatar} alt="Remy Sharp" src={catMeme} />
            </Grid>
            <Grid item xs={8} md={10}>
              <Typography variant="h4" className={isBright ? "darkTitleColor" : "brightTitleColor"}>
                Baal Wu
              </Typography>
            </Grid>
            <Grid item xs={12}>

              {/* <Typography className={classes.typographyText}>
                This is Baal Wu.
              </Typography> */}

              <Typography className={`content ${isBright ? "darkTextColor" : "brightTextColor"}`}>
                This is Baal Wu.
              </Typography>

              <DividerWithMarginStyledComponent />

              <Typography className={clsx('content', isBright ? "darkTextColor" : "brightTextColor")}>
                He likes delicious chicken given by Gooch, but not Veggies!!
              </Typography>

              <DividerWithMarginHoc />

              <Typography color="primary">
                It's your kindness opportunity to donate light roast coffee beans to Baal Wu.
              </Typography>

              <Divider className={classes.divider} />

              <Typography color="primary">
                It's never too late to brew a cup of scrumptious coffee.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}