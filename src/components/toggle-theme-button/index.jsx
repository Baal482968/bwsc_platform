import React, { useContext } from 'react'

import {
  FormControlLabel,
  Typography,
  Switch,
} from '@material-ui/core'

import { ThemeColorContext } from '../../configs/contexts.config'

export const ToggleThemeButton = () => {
  const [themeColor, togglethemeColor] = useContext(ThemeColorContext)
  const isDark = themeColor === 'dark'
  const oppositeColor = isDark ? 'bright' : 'dark'
  const handleThemeChange = () => togglethemeColor(oppositeColor)
  return (
    <>
      <FormControlLabel
        control={<Switch checked={isDark} onChange={handleThemeChange} name="checkedA" />}
        label={(<Typography color="primary">Dark Mode</Typography>)}
      />
    </>
  )
}