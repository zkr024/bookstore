import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';

import './categoryButton.css';

const CategoryButton = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.statusReducer);

  return (
    <div className="categoryArea">
      <h3>{data}</h3>
      <button
        className="categoryButton"
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};

export default CategoryButton;
