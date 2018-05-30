import * as actionTypes from '../actions';
import _ from 'lodash';

const iniState = {
  components: []
};
function manageComponents(state = iniState, action) {
  switch (action.type) {
    case actionTypes.ADD_COMPONENT:
      const newComponent = {
        id: Math.floor(Math.random()*10000),
        co: action.data.compToReducer,
        toRecipe: false
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
       components: state.components.map((component, index) =>  component.id === action.payload.ind ?
       {...component, co: action.payload.componentToReducer} : component
     )
    };
    case actionTypes.ADD_COM_TO_RECIPE:
      return {
        ...state,
        components: state.components.map(comp=> comp.id === action.payload.idInReducer ?
          {...comp, toRecipe: !comp.toRecipe} : comp

        )
      }
}
  return state;
}

export default manageComponents;
