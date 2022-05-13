/* eslint-disable camelcase */
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const ApiInfo = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2EaJDwb5nggGXI4ziKSP/books';

const initialState = [];

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

const addBook = (title, author, item_id, category) => ({
  type: ADD_BOOK,
  payload: {
    item_id,
    title,
    author,
    category,
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const getBooks = () => async (dispatch) => {
  const res = await axios.get(`${ApiInfo}`);
  const newArray = Object.keys(res.data).map((key) => {
    const { title, author, category } = res.data[key][0];
    return {
      item_id: key,
      title,
      author,
      category,
    };
  });
  dispatch({
    type: GET_BOOKS,
    payload: newArray,
  });
};

const postBookToAPI = () => async (dispatch, getState) => {
  const position = getState().bookListReducer.length - 1;
  const newBook = getState().bookListReducer[position];

  await fetch(ApiInfo, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newBook),
  });
};

const DeleteFromAPI = (id) => async () => {
  await fetch(`${ApiInfo}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  });
};

export default bookListReducer;
export {
  addBook, removeBook, getBooks, postBookToAPI, DeleteFromAPI,
};
