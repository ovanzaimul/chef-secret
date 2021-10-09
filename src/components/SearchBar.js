import React, { useState } from 'react';
import { fetchRecipes } from '../actions';
import { connect } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import { createSvgIcon, TextField } from '@mui/material';
import { Box } from '@mui/system';

const SearchIcon = createSvgIcon(
  <path
    d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z
'
  />,
  'Search'
);

const SearchBar = ({ fetchRecipes }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(query);
  };

  return (
    <Box
      noValidate
      autoComplete='off'
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '60%', color: 'primary.main' }}
      onSubmit={onFormSubmit}
    >
      <TextField
        variant='standard'
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search over 1,000,000 recipes...'
        inputProps={{ 'aria-label': 'search recipe' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps, { fetchRecipes })(SearchBar);
