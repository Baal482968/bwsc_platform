import { createMuiTheme } from '@material-ui/core/styles'

const fontFamily = [
  'Helvetica Neue',
  'Arial',
  'Helvetica',
  'sans-serif',
].join(',')

const brightColor = {
  primaryColor: '#000000',
  navBackgroundColor: '#FFFFFF',
}

const darkColor = {
  primaryColor: '#ffdec2',
  navBackgroundColor: '#4d1900',
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
  },
  ...sharedTheme,
}

export const themeGenerator = type => {
  let themeSetting = brightTheme
  if (type === 'dark') themeSetting = darkTheme
  return createMuiTheme(themeSetting)
}
