import * as actionTypes from '../actions';


const iniState = {
  recipes : []
}

function createRecipe(state = iniState, action) {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      const newRecipe = {
        id: Math.floor(Math.random()*10000),
        re: action.payload.recipeInReducer
      }
      return {
        ...state,
        recipes: state.recipes.concat(newRecipe)
      }
  }
  return state;
}

export default createRecipe;
