import {combineReducers} from 'redux';
import ManageComponents from './manageComponents';
import CreateRecipe from './createRecipe';
import addTerm from './addTerm';

const rootReducer = combineReducers({
  manageComponents: ManageComponents,
  createRecipe: CreateRecipe,
  addTerm: addTerm
})

export default rootReducer;
