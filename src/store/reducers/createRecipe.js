import * as actionTypes from '../actions';
import {schema, normalize, arrayOf} from 'normalizr';
import _ from 'lodash';


const iniState = {
  recipes : []
}

function createRecipe(state = iniState, action) {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      let newRecipe = {
        id: Math.floor(Math.random()*10000),
        re: action.payload.recipeInReducer,
        c: action.payload.compsInReducer
      }
      return {
        ...state,
        recipes: state.recipes.concat(newRecipe)
      }
      case actionTypes.EDIT_BOOLEAN:
      return {...state,
        recipes: [..._.map(state.recipes, recipe=>{
          if(recipe.id === action.payload.idFromRecipe){
            return Object.assign({}, recipe, {
              c: {..._.map(recipe.c, comp=>{
                if(comp.id === action.payload.idFromComp){
                  return {...comp,
                  toRecipe: !comp.toRecipe};
                }else{return comp}
              })
            }
            })
          } else{
            return Object.assign({}, recipe, {
              c: {..._.map(recipe.c, comp=>comp)}})
          }
        })
      ]
}

 }
  return state;
}
export default createRecipe;
