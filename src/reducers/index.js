import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import recipeReducer from './recipeReducer';
import bookmarksReducer from './bookmarksReducer';

export default combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  bookmarks: bookmarksReducer,
});
