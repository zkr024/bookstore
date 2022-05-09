import { createStore, combineReducers } from 'react-redux';
import reducerForCategory, { actionForCategory } from './categories/categories';
import reducer, { bookToAdd } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);
store.dispatch(actionForCategory());
store.dispatch(bookToAdd());
