import './styles/main.scss';

import { Footer } from '../footer';
import { Header } from '../header';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';
import { MainOppts } from '../main-oppts';
import { Process } from '../process';
import { Automatisation } from '../automatisation';
import { Service } from '../service';
import { HowItWorks } from '../how-it-works';
import { Comments } from '../comments';
import { Solution } from '../solution';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0098FB',
      light: '#77C2F2',
    },
    secondary: purple,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          height: 43,
          padding: '.75rem 1.5rem',
          fontSize: '.7vw',
          borderColor: '#151515',
        },
        root: {
          height: 43,
          backgroundColor: 'white',
          borderRadius: '12px',
          borderColor: '#151515',
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          height: 40,
          fontSize: '.8vw',
          borderRadius: '5rem',
        },
        outlined: {
          borderRadius: '5rem',
        },
      },
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainOppts />
      <HowItWorks />
      <Process />
      <Solution />
      <Automatisation />
      <Comments />
      <Service />
      <Footer />
    </ThemeProvider>
  );
};
