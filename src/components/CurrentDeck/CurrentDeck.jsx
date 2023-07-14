import React, { useEffect, useState } from "react";
import './CurrentDeck.css';
import DeckCover from '../DeckCover/DeckCover.jsx';
import add from '../../images/add_button.png';
import dots from '../../images/dots.png';
import find from '../../images/find.png';
import { addNewDeck, removeCard, editCard, deleteDeck, editDeck } from '../../services/actions/cards.js';
import { setCurrentDeck } from '../../services/actions/currentDeck.js';
import { useSelector, useDispatch } from 'react-redux';

function CurrentDeck({setAddDeckModalIsOpen, setEditDeckModalIsOpen}) {

  //const { cards } = useSelector(state => state.cardsReducer);
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const { decks } = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const [showCards, setShowCards] = useState(false);
  const [addNewDeckForm, setNewDeckFormValue] = useState({ title: '' });
  const [form, setValue] = useState({ text: '', translation: '' });
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [editingForm, setEditedMeaning] = useState({ text: '', translation: '', ID: 0 });
  const [decksToRender, setDecksToRender] = useState([]);
  const [wordsToRepeat, setWordsToRepeat] = useState([]);
  const repeatingInput = document.getElementById('cardsHolderRepeatingInput');

  const onAddNewDeckChange = e => {
    setNewDeckFormValue({ ...addNewDeckForm, [e.target.name]: e.target.value });
  };

  function showAddNewDeckForm() {
    setAddDeckModalIsOpen(true);
  }

  function removeDeck() {
    dispatch(deleteDeck(currentDeck.slug));
    dispatch(setCurrentDeck(decks[0]));
  }

  function editCurrentDeck() {
    setEditDeckModalIsOpen(true);
  }

  return (
    <>
      <section className="currentDeck" id="currentDeck">
        <div className='currentDeck__dotsBlock'>
          <h3 className="currentDeck__number">
            #{currentDeck.number}
          </h3>
          <img 
            className="currentDeck__dots-img" 
            src={dots} 
            alt="Dots"
            onClick={removeDeck}/>
            <img 
            className="currentDeck__dots-img" 
            src={dots} 
            alt="Dots"
            onClick={editCurrentDeck}/>
        </div>
        <h2 className="currentDeck__title">{currentDeck.title}</h2>  
        <div className="currentDeck__input-container">
          <input 
            placeholder="New deck title" 
            value={addNewDeckForm.title} 
            name="title" 
            onChange={onAddNewDeckChange}
            type="text"
            className='currentDeck__input' />
          <img 
            className="currentDeck__find-img" 
            src={find} 
            alt="Лупа"
            />
        </div>     
        <div className="cardsHolder__decksContainer">
        </div>
      </section>
    </>
  );
}  

export default CurrentDeck;
