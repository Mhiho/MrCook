import * as actionTypes from '../actions';


const iniState = {
  recipes : []
}

function createRecipe(state = iniState, action) {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      const newRecipe = {
        id: Math.floor(Math.random()*10000),
        re: action.payload.recipeInReducer,
        comps: action.payload.compsInReducer
      }
      return {
        ...state,
        recipes: state.recipes.concat(newRecipe)
      }
    case actionTypes.EDIT_RECIPE:
      return {
        ...state,
        components: state.recipes.map(recipe=> recipe.comps.map(comp=> comp.id === action.payload.idInReducer && comp.toRecipe === true ?
          {...comp, toRecipe: action.payload.toRecipeInReducer} : comp
        ))
      }
  }
  return state;
}

export default createRecipe;
