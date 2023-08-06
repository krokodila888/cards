import {
  SET_WORD,
  CLEAR_CURRENT_WORD
} from "../../utils/constants";

const initialState = {
  currentWord: null
}

export const currentWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
        currentWord: action.item,
      }
    case CLEAR_CURRENT_WORD:
      return initialState
    default: {
      return state
    }
  }
} 
