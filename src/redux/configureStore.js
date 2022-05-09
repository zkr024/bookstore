import { createStore, combineReducers } from 'redux';
import reducerForCategory, { checkStatus } from './categories/categories';
import reducer, { bookToAdd, bookToRemove } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);
store.dispatch(checkStatus());
store.dispatch(bookToAdd());
store.dispatch(bookToRemove());
