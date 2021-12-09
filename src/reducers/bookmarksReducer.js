const local = JSON.parse(localStorage.getItem('bookmarks')) || [];

const bookmarksReducer = (initialState = local, action) => {
	switch (action.type) {
		case 'ADD_BOOKMARK':
			return [...initialState, action.payload];
		case 'DELETE_BOOKMARK':
			return initialState.filter(bookmark => bookmark.id !== action.payload.id);
		default:
			return initialState;
	}
};

export default bookmarksReducer;
