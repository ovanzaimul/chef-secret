import axios from 'axios';

export const fetchRecipes = (query) => async (dispatch, _) => {
  const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);

  dispatch({ type: 'FETCH_RECIPES', payload: data.data.recipes });
};

export const fetchRecipe = (id) => async (dispatch, _) => {
  const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
  dispatch({ type: 'FETCH_RECIPE', payload: data.data.recipe });
};
