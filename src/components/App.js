import { Container, createSvgIcon, createTheme, Typography } from '@mui/material';
import { ReactComponent as LogoApp } from '../assets/codechef.svg';
import { ThemeProvider } from '@emotion/react';
import { brown, deepOrange } from '@mui/material/colors';

import { Box } from '@mui/system';
import React from 'react';
import SearchBar from './SearchBar';
import Bookmark from './Bookmark';

const theme = createTheme({
  palette: {
    primary: { main: deepOrange[500], light: deepOrange[300], dark: deepOrange[900] },
    secondary: { main: brown[500], light: brown[300], dark: brown[900] },
  },
});

const style = {
  logo: { display: 'flex', alignItems: 'center' },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    p: 2,
    backgroundColor: 'primary.main',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 6 }}>
        <Container sx={style.container} maxWidth='lg'>
          <Box sx={style.logo} color='secondary.main'>
            <LogoApp />
            <Typography style={{ marginLeft: '-18px', fontWeight: 'medium' }}>ChefSecret</Typography>
          </Box>
          <SearchBar />
          <Bookmark />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
