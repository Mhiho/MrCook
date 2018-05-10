import * as actionTypes from '../actions';

const iniState = {
  components: []
};
const rootReducer = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMPONENT:
      const newComponent = {
        id: Math.random(),
        co: action.data.compFromReducer
      }
      return {
        ...state,
        components: state.components.concat(newComponent)
      }
  }
  return state;
}

export default rootReducer;
