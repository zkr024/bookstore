import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import bookListReducer from './books/books';
import statusReducer from './categories/categories';

const reducers = combineReducers({
  bookListReducer,
  statusReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
