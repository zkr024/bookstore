const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookToAdd = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
  },
});

const bookToRemove = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducer = (initialState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.id))];
    default:
      return initialState;
  }
};

export default reducer;
export { bookToAdd, bookToRemove };
