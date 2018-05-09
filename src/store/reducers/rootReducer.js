import * as actionTypes from '../actions';

const iniState = {
  recipes: []
};
const rootReducer = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      return {
        ...state,
      }
  }
  return state;
}

export default rootReducer;
