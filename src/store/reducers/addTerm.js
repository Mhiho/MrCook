import * as actionTypes from '../actions';

const initState = {
  terms: []
}


function addTerm(state = initState, action){
  switch (action.type) {
    case actionTypes.ADD_TERM:
      return {
        ...state,
        terms: [...state.terms, action.termInReducer]
      }
  }
  return state;
}

export default addTerm;
