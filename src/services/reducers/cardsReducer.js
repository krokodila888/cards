import {
  GET_MY_DECKS,
  GET_MY_DECKS_FAILED,
  GET_MY_DECKS_SUCCESS,
  GET_DECK_INFO,
  GET_DECK_INFO_FAILED,
  GET_DECK_INFO_SUCCESS,
  ADD_DECK,
  ADD_DECK_FAILED,
  ADD_DECK_SUCCESS,
  EDIT_DECK,
  EDIT_DECK_FAILED,
  EDIT_DECK_SUCCESS,
  DELETE_DECK,
  DELETE_DECK_FAILED,
  DELETE_DECK_SUCCESS,

  ADD_CARD,
  ADD_CARD_FAILED,
  ADD_CARD_SUCCESS,
  EDIT_CARD,
  EDIT_CARD_FAILED,
  EDIT_CARD_SUCCESS,
  DELETE_CARD,
  DELETE_CARD_FAILED,
  DELETE_CARD_SUCCESS,
  GET_CARD_INFO,
  GET_CARD_INFO_FAILED,
  GET_CARD_INFO_SUCCESS,
  GET_TODAY_CARDS,
  GET_TODAY_CARDS_FAILED,
  GET_TODAY_CARDS_SUCCESS,
} from "../../utils/constants";
  
const initialState = {
  decksRequest: false,
  decksRequestFailed: false,
  decks: [],
  addDeckRequest: false,
  addDeckRequestFailed: false,
  addDeckRequestRes: null,
  editDeckRequest: false,
  editDeckRequestFailed: false,
  editDeckRequestRes: null,
  removeDeckRequest: false,
  removeDeckRequestFailed: false,
  removeDeckRequestRes: null,
  addCardRequest: false,
  addCardRequestFailed: false,
  addCardRequestRes: null,
  editCardRequest: false,
  editCardequestFailed: false,
  editCardRequestRes: null,
  removeCardRequest: false,
  removeCardRequestFailed: false,
  removeCardRequestRes: null,
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_DECKS: {
      return {
        ...state,
        decksRequest: true,
        decksRequestFailed: false,
      };
    }
    case GET_MY_DECKS_SUCCESS: {
      return { 
        ...state, 
        decks: action.decks, 
        decksRequest: false 
      };
    }
    case GET_MY_DECKS_FAILED: {
      return { 
        ...state,
        decksRequestFailed: true, 
        decksRequest: false 
      };
    }
    case ADD_DECK: {
      return {
        ...state,
        addDeckRequest: true,
        addDeckRequestFailed: false,
      };
    }
    case ADD_DECK_SUCCESS: {
      return {
        ...state,
        decks: [
          ...state.decks,
          action
        ],
        addDeckRequest: false
      };
    }
    case ADD_DECK_FAILED: {
      return { 
        ...state, 
        addDeckRequestFailed: true, 
        addDeckRequest: false 
      };
    }
    case DELETE_DECK: {
      return {
        ...state,
        decks: state.decks.filter(
          (item1) => (item1.id !== action.slug)
        ),
      };
    }
    case EDIT_DECK: {
      const editedOne = state.decks.indexOf((item1) => (item1.id === action.editedDeck.id));
      return {
        ...state,
        decks: [state.decks.splice(editedOne, 1, action.editedDeck)],
      };
    }
    /*case DELETE_FLOWER_SUCCESS: {
      return {
        ...state,
        myFlowers: [
          ...state.myFlowers,
          action.newFlower
        ],
        addFlowerRequest: false
      };
    }
    case DELETE_FLOWER_FAILED: {
      return { 
      ...state, 
        addFlowerRequestFailed: true, 
        addFlowerRequest: false 
      };
    }*/
    default: {
      return state
    }
  }
}
