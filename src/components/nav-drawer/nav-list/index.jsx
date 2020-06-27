import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'

import { componentConfigs } from './components.config'

const useStyles = makeStyles(theme => {
  const { color: {
    navDrawerBackgroundColor,
    primaryColor,
    secondaryColor,
  } } = theme
  return ({
    linkButton: {
      textDecoration: 'none',
    },
    iconPrimary: {
      color: primaryColor,
    },
    iconSecondary: {
      color: secondaryColor,
    },
    navList: {
      width: 250,
      height: '100%',
      backgroundColor: navDrawerBackgroundColor,
    },
  })
})

export const NavList = ({ handleClose }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.navList}
    >
      <List>
        {['Beans', 'Brewing', 'Roasting', 'Dripping'].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={handleClose}
          >
            <ListItemIcon className={classes.iconPrimary}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} primaryTypographyProps={{ color: "primary" }} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {
          componentConfigs.map(config => (
            <Link
              to={config.path}
              key={config.title}
              className={classes.linkButton}
            >
              <ListItem
                button
                onClick={handleClose}
              >
                <ListItemIcon className={classes.iconSecondary}>
                  {config.icon}
                </ListItemIcon>
                <ListItemText secondary={config.title} secondaryTypographyProps={{ color: "secondary" }} />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </div>
  )
}

NavList.propTypes = {
  handleClose: PropTypes.func.isRequired,
}
