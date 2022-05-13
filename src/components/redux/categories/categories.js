const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const statusReducer = (state = '', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({ type: CHECK_STATUS });

export default statusReducer;
export { checkStatus };
