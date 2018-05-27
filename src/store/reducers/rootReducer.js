import * as actionTypes from '../actions';
import _ from 'lodash';

const iniState = {
  components: []
};
const rootReducer = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMPONENT:
      const newComponent = {
        id: Math.floor(Math.random()*10000),
        co: action.data.compToReducer
      }
      return {
        ...state,
        components: state.components.concat(newComponent)
      };
    case actionTypes.DELETE_COMPONENT:
      return {
        ...state,
        components: state.components.filter(component=> component.id !== action.index)
      };
    case actionTypes.EDIT_COMPONENT:
      return {
       ...state,
       components: state.components.map((component, index) =>  component.key == action.payload.ind ?
       {...component, co: action.payload.componentToReducer} : component
     )
    };
}
  return state;
}

export default rootReducer;
