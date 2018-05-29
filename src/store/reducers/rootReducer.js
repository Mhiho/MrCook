import {combineReducers} from 'redux';
import ManageComponents from './manageComponents';

const rootReducer = combineReducers({
  manageComponents: ManageComponents
})

export default rootReducer;
