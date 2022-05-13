import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook, DeleteFromAPI } from '../redux/books/books';

import './style/book.css';

const Book = (props) => {
  const {
    author, title, id, category,
  } = props;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
    dispatch(DeleteFromAPI(id));
  };

  return (
    <ul className="section">
      <li key={id}>
        <div className="bookInfo">
          <p className="categorySection">{category}</p>
          <h2>{title}</h2>
          <div className="authorSection">{author}</div>
          <div className="buttons">
            <button
              type="button"
              className="comments"
            >
              Comments
            </button>
            <button
              type="button"
              className="delete"
              onClick={remove}
            >
              Remove
            </button>
            <button
              type="button"
              className="edit"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="status">
          <p className="current">CURRENT CHAPTER</p>
          <p className="completed">Chapter 3 A lesson learned</p>
          <button
            type="button"
            className="progress"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </li>
    </ul>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
