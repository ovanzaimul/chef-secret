import { Avatar, Card, CardHeader, createSvgIcon, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const style = {
  gap: { marginBottom: '10px', bgcolor: 'primary.light' },
};

const SearchIcon = createSvgIcon(
  <path
    d='M7 9H2V7h5v2zm0 3H2v2h5v-2zm13.59 7-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59 20.59 19zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zM2 19h10v-2H2v2z
'
  />,
  'Search'
);

const RecipesPage = ({ recipes }) => {
  const renderRecipes = () => {
    return recipes.map((recipe, index) => (
      <Link key={index} to={`/${recipe.id}`}>
        <Card sx={style.gap}>
          <CardHeader avatar={<Avatar src={recipe.image_url} />} title={recipe.title} subheader={recipe.publisher} />
        </Card>
      </Link>
    ));
  };

  if (recipes.length > 0) {
    return renderRecipes();
  } else {
    return (
      <Typography>
        <SearchIcon fontSize='large' />
        <br />
        Start by searching for a recipe or an ingredient. Have fun!
      </Typography>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('from recipes page', state);
  return { recipes: state.recipes };
};

export default connect(mapStateToProps)(RecipesPage);
