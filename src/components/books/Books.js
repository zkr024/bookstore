import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from './Book';
import { getBooks } from '../redux/books/books';

const bookList = (data) => {
  const book = (
    <Book
      id={data.item_id}
      title={data.title}
      author={data.author}
      key={data.item_id}
      category={data.category}
    />
  );
  return book;
};

const Books = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {data.bookListReducer.map((info) => bookList(info))}
    </>
  );
};

export default Books;
