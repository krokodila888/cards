import {
  SET_DECK,
  CLEAR_CURRENT_DECK
} from "../../utils/constants";

const initialState = {
  currentDeck: {}
}

export const currentDeckReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DECK:
      return {
        ...state,
        currentDeck: action.item,
      }
    case CLEAR_CURRENT_DECK:
      return initialState
    default: {
      return state
    }
  }
} 
