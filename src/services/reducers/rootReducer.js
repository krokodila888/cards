import { combineReducers } from 'redux';
import { currentDeckReducer } from "./currentDeckReducer";
import { currentWordReducer } from "./currentWordReducer";
/*import { getUserFlowersReducer } from "./getUserFlowersReducer";
import { resetPasswordReducer } from "./resetPasswordReducer";*/
import { cardsReducer } from "./cardsReducer";
import { authReducer } from "./authReducer";
//import {locationReducer} from './locationReducer';

export const rootReducer = combineReducers({
  cardsReducer,
  authReducer,
  currentDeckReducer,
  currentWordReducer,
  /*getUserFlowersReducer,
  currentFlowerReducer,
  resetPasswordReducer,
  locationReducer*/
}) 
