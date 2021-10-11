import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createTheme, Typography } from '@mui/material';
import { ReactComponent as LogoApp } from '../assets/codechef.svg';
import { ThemeProvider } from '@emotion/react';
import { brown, deepOrange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SearchBar from './SearchBar';
import Bookmark from './Bookmark';
import RecipesPage from '../pages/RecipesPage';
import RecipePage from '../pages/RecipePage';

const theme = createTheme({
  palette: {
    primary: { main: deepOrange[500], light: deepOrange[300], dark: deepOrange[900], lightest: deepOrange[50] },
    secondary: { main: brown[500], light: brown[300], dark: brown[900] },
  },
});

const style = {
  container: { p: { lg: 6, md: 4, sm: 0 }, backgroundColor: '#fbe9e7', height: '100%', overflowY: 'auto' },
  logo: { display: 'flex', alignItems: 'center' },
  nav: {
    display: 'flex',
    flexDirection: { sm: 'row', xs: 'column' },
    justifyContent: { sm: 'space-between', xs: 'center' },
    alignItems: { sm: 'space-between', xs: 'center' },
    p: 2,
    backgroundColor: '#ff5722',
    marginBottom: '10px',
  },
  customGrid: { height: '95vh', maxHeight: '1200px' },
};

const ItemContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  minHeight: '100%',
  maxHeight: '1200px',
  overflowY: 'scroll',
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={style.container}>
          <Paper component='nav' sx={style.nav}>
            <Box sx={style.logo} color='secondary.main'>
              <LogoApp />
              <Typography color='secondary.main' style={{ marginLeft: '-18px', fontWeight: 'bold' }}>
                ChefSecret
              </Typography>
            </Box>
            <SearchBar />
            <Bookmark />
          </Paper>

          {/* <Offset /> */}
          <Grid sx={style.customGrid} spacing={2} container>
            <Grid xs={4} md={3} xs={12} item>
              <ItemContainer>
                <Route path='/' component={RecipesPage} />
              </ItemContainer>
            </Grid>
            <Grid xs={8} md={9} xs={12} item>
              <ItemContainer>
                <Route path='/:id' component={RecipePage} />
              </ItemContainer>
            </Grid>
          </Grid>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
