import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
});
