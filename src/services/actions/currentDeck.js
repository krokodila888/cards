import {
  SET_DECK,
  CLEAR_CURRENT_DECK
} from "../../utils/constants";

export function setCurrentDeck(data, index) {
  return {
    type: SET_DECK,
    item: {...data, number: index + 1}
  }
}

export function removeCurrentDeck() {
  return {
    type: CLEAR_CURRENT_DECK
  }
} 
