import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c4a3a',
      light: '#8b7355',
      dark: '#3d2e22',
    },
    secondary: {
      main: '#c4a882',
    },
    background: {
      default: '#f7ede2',
      paper: '#efe0d0',
    },
    text: {
      primary: '#1e160e',
      secondary: '#9c8c80',
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 700,
      fontSize: '52px',
      lineHeight: 1.05,
      letterSpacing: '-0.5px',
    },
    body1: {
      fontSize: '12.5px',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '12px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          letterSpacing: '0.04em',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
})

export default theme
