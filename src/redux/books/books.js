const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const initialArrayOfBooks = [
  {
    title: 'Lord of the Rings',
    author: ' J. R. R. Tolkien',
    id: 1,
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline',
    id: 2,
  },
];

const reducer = (initialState = initialArrayOfBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...initialState, action.payload];
    case REMOVE_BOOK:
      return [...initialState.filter((book) => (book.id !== action.payload))];
    default:
      return initialState;
  }
};

const createActionForBookToAdd = (title, author) => ({
  type: 'NON_ACTIVE',
  payload: {
    title,
    author,
  },
});

const createActionForBookToRemove = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default reducer;
export { createActionForBookToAdd, createActionForBookToRemove };
