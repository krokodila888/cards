import {
  SET_WORD,
  CLEAR_CURRENT_WORD
} from "../../utils/constants";

export function setCurrentWord(data) {
  return {
    type: SET_WORD,
    item: data
  }
}

export function removeCurrentWord() {
  return {
    type: CLEAR_CURRENT_WORD
  }
} 
