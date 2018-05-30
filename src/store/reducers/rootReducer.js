import {combineReducers} from 'redux';
import ManageComponents from './manageComponents';
import CreateRecipe from './createRecipe';

const rootReducer = combineReducers({
  manageComponents: ManageComponents,
  createRecipe: CreateRecipe
})

export default rootReducer;
