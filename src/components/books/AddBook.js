/* eslint-disable no-const-assign */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';

import { postBookToAPI, addBook } from '../redux/books/books';

import './style/addBook.css';

const AddBook = () => {
  const [TitleInput, setTitleInput] = useState('');
  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const [AuthorInput, setAuthorInput] = useState('');
  const handleAuthorChange = (e) => {
    setAuthorInput(e.target.value);
  };

  const dispatch = useDispatch();
  const id = uuidv4();

  const newBook = (e) => {
    if (AuthorInput && TitleInput) {
      dispatch(addBook(
        TitleInput,
        AuthorInput,
        id,
        'fiction',
      ));
      e.target.form[0].value = '';
      e.target.form[1].value = '';
      dispatch(postBookToAPI());
    }
  };

  return (
    <div className="inputArea">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          required
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Author"
          required
          onChange={handleAuthorChange}
        />
        <button
          className="addBook"
          type="button"
          onClick={newBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
