import * as actionTypes from '../actions';
import _ from 'lodash';

const iniState = {
  components: [],
  recipes: []
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
       components: state.components.map(component =>  component.id === action.payload.ind ?
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
    case actionTypes.EDIT_BOOLEAN:
      return {
        ...state,
        recipes: state.recipes.map(recipe=>recipe.comps.map(comp=> comp.id === action.payload.idInReducer ?
          {...comp, toRecipe: comp.toRecipeInReducer} : comp
        ))
      }

///skopiowane ponizej z createRecipe

        case actionTypes.ADD_RECIPE:
          const newRecipe = {
            id: Math.floor(Math.random()*10000),
            re: action.payload.recipeInReducer,
            comps: action.payload.compsInReducer
          }
          return {
            ...state,
            recipes: state.recipes.concat(newRecipe).filter(recipe=>recipe.comps.map(comp=>comp.toRecipe === true))
          }
        case actionTypes.EDIT_RECIPE:
          return {
            ...state,
            recipes: state.recipes
    }
}
  return state;
}

export default manageComponents;
