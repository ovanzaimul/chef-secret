export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_RECIPE':
      return action.payload;

    default:
      return state;
  }
};
