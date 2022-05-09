const ACTIVE = 'ACTIVE';
const NOT_ACTIVE = 'NOT_ACTIVE';

const actionForCategory = () => ({ type: NOT_ACTIVE });

const reducerForCategory = (state = [], action) => {
  switch (action.type) {
    case ACTIVE:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducerForCategory();
export { actionForCategory };
