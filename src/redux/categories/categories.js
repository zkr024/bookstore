const ACTIVE = 'ACTIVE';

const underCons = {
  cons: 'Under construction',
};

const reducerForCategory = (state = '', action) => {
  switch (action.type) {
    case ACTIVE:
      return underCons;
    default:
      return state;
  }
};
const createActionForCategory = () => ({ type: ACTIVE });

export default reducerForCategory;
export { createActionForCategory };
