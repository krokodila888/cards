import { combineReducers } from 'redux';
import { currentDeckReducer } from "./currentDeckReducer";
/*import { currentFlowerReducer } from "./currentFlowerReducer";
import { getUserFlowersReducer } from "./getUserFlowersReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";*/
import { cardsReducer } from "./cardsReducer";
import { authReducer } from "./authReducer";
//import {locationReducer} from './locationReducer';

export const rootReducer = combineReducers({
  cardsReducer,
  authReducer,
  currentDeckReducer,
  /*getUserFlowersReducer,
  currentFlowerReducer,
  resetPasswordReducer,
  locationReducer*/
}) 
