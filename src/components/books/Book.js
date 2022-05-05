import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title } = props;
  return (
    <>
      <h3>{title}</h3>
      <div>{author}</div>
      <button type="button">Remove</button>
    </>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
