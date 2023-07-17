import React, { useEffect, useState } from "react";
import './CurrentWord.css';
import DeckCover from '../DeckCover/DeckCover.jsx';
import RepeatingMode from '../RepeatingMode/RepeatingMode.jsx';
import add from '../../images/add_button.png';
import dots from '../../images/dots.png';
import find from '../../images/find.png';
import { addNewDeck, removeCard, editCard, deleteDeck, editDeck, getDeckCardsInfo } from '../../services/actions/cards.js';
import { setCurrentDeck } from '../../services/actions/currentDeck.js';
import { setCurrentWord } from '../../services/actions/currentWord.js';
import { useSelector, useDispatch } from 'react-redux';

function CurrentWord(props) {

  //const { cards } = useSelector(state => state.cardsReducer);
  //const {setAddDeckModalIsOpen, setEditDeckModalIsOpen, setAddWordModalIsOpen, setEditWordModalIsOpen} = props;
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const { currentWord } = useSelector(state => state.currentWordReducer);
  const { decks, deckCards } = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();

  /*function removeDeck() {
    dispatch(deleteDeck(currentDeck.slug));
    dispatch(setCurrentDeck(decks[0]));
  }

  function editCurrentDeck() {
    setEditDeckModalIsOpen(true);
  }*/

  return (
    currentWord && 
    <>
      <div className='currentWord__wordBlock'>
        <p 
          className="currentDeck__word">
          {currentWord.front_side}
        </p>
        <p 
          className="currentDeck__word">
          {currentWord.back_side}
        </p>
        {currentWord.description !== '' && 
        <p 
          className="currentDeck__word">
          {currentWord.description}
        </p>
        }
      </div>
      <div className="currentDeck__button-container">
        <button 
          type="button" 
          className="addNewDeckForm__addButton addNewDeckForm__button-disabled"
          >
          EDIT
        </button>
        <button 
          type="button" 
          className="addNewDeckForm__addButton addNewDeckForm__button-disabled">
          DELETE
        </button> 
      </div>
    </>
  )
}  

export default CurrentWord;
