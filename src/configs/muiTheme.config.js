import { createMuiTheme } from '@material-ui/core/styles'

const fontFamily = [
  'Arial',
  'Helvetica',
  'sans-serif',
].join(',')

const brightColor = {
  primaryColor: '#c47600',
  secondaryColor: '#9c2400',
  contentBackgroundColor: 'white',
  sideBackgroundColor: '#f2f2f2',
  navBackgroundColor: '#ffecc4',
  navDrawerBackgroundColor: '#fdffd4',
}

const darkColor = {
  primaryColor: '#ffdec2',
  secondaryColor: '#e9ffb3',
  contentBackgroundColor: '#696969',
  sideBackgroundColor: '#292929',
  navBackgroundColor: '#4d1900',
  navDrawerBackgroundColor: '#4a3b0f',
}

const sharedTheme = {
  typography: {
    fontFamily,
  },
}

const brightTheme = {
  color: brightColor,
  palette: {
    primary: {
      light: '#ffbb4d',
      main: brightColor.primaryColor,
      dark: '#5e3a00',
      contrastText: '#fffce6',
    },
    secondary: {
      light: '#f0a089',
      main: brightColor.secondaryColor,
      dark: '#4a1100',
      contrastText: '#ffe6f1',
    },
  },
  ...sharedTheme,
}

const darkTheme = {
  color: darkColor,
  palette: {
    primary: {
      light: '#ffdb9e',
      main: darkColor.primaryColor,
      dark: '#ededed',
      contrastText: '#3b0d0d',
    },
    secondary: {
      light: '#dcfa91',
      main: darkColor.secondaryColor,
      dark: '#f3f7e9',
      contrastText: '#3b3a0d',
    },
  },
  ...sharedTheme,
}

export const themeGenerator = type => {
  let themeSetting = brightTheme
  if (type === 'dark') themeSetting = darkTheme
  return createMuiTheme(themeSetting)
}