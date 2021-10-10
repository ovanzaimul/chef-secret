const recipeReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_RECIPE':
      return action.payload;

    default:
      return state;
  }
};

export default recipeReducer;
