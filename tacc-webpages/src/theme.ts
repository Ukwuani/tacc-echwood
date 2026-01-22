import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      default: '#FFFFFE'
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: 60,
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h3: 'h1',
          h2: 'h1',
        },
      },
    },
  }
});

export default theme;
