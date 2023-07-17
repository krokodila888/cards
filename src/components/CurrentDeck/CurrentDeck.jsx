import React, { useEffect, useState } from "react";
import './CurrentDeck.css';
import DeckCover from '../DeckCover/DeckCover.jsx';
import CurrentWord from '../CurrentWord/CurrentWord.jsx';
import RepeatingMode from '../RepeatingMode/RepeatingMode.jsx';
import add from '../../images/add_button.png';
import dots from '../../images/dots.png';
import find from '../../images/find.png';
import { addNewDeck, removeCard, editCard, deleteDeck, editDeck, getDeckCardsInfo } from '../../services/actions/cards.js';
import { setCurrentDeck } from '../../services/actions/currentDeck.js';
import { setCurrentWord } from '../../services/actions/currentWord.js';
import { useSelector, useDispatch } from 'react-redux';

function CurrentDeck(props) {

  //const { cards } = useSelector(state => state.cardsReducer);
  const {setAddDeckModalIsOpen, setEditDeckModalIsOpen, setAddWordModalIsOpen, setEditWordModalIsOpen} = props;
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const { currentWord } = useSelector(state => state.currentWordReducer);
  const { decks, deckCards } = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const [repeatMode, setRepeatMode] = useState(false);
  const [searchForm, setSearchFormValue] = useState({ search: '' });

  useEffect(() => {
    dispatch(getDeckCardsInfo(currentDeck.slug))
  }, [currentDeck])

  
  const onAddNewDeckChange = e => {
    setSearchFormValue({ ...searchForm, [e.target.name]: e.target.value });
  };

  function showAddNewDeckForm() {
    setAddDeckModalIsOpen(true);
  }

  function showAddWordForm() {
    setAddWordModalIsOpen(true);
  }

  function showEditWordForm() {
    setEditWordModalIsOpen(true);
  }

  function removeDeck() {
    dispatch(deleteDeck(currentDeck.slug));
    dispatch(setCurrentDeck(decks[0]));
  }

  function editCurrentDeck() {
    setEditDeckModalIsOpen(true);
  }

  function startRepeating() {
    setRepeatMode(true);
  }

  function chooseWord(item) {
    console.log(item);
    dispatch(setCurrentWord(item));
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
            placeholder="Searching for words" 
            value={searchForm.search} 
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
        <div className="currentDeck__button-container">
          <button 
            type="button" 
            className="addNewDeckForm__addButton addNewDeckForm__button-disabled"
            onClick={showAddWordForm}>
            ADD
          </button>
          <button 
            type="button" 
            className="addNewDeckForm__addButton addNewDeckForm__button-disabled"
            onClick={showEditWordForm}>
            EDIT
          </button>
          <button 
            type="button" 
            className="addNewDeckForm__addButton addNewDeckForm__button-disabled">
            DELETE
          </button> 
        </div>
        {currentWord && currentWord !== null &&
          <CurrentWord/>
        }
      </section>
      <div className="cardsHolder__wordsContainer">
          {deckCards !== null && deckCards.map((item, i) => (
            <p 
              key={i} 
              item={item} 
              className="currentDeck__word"
              onClick={e => chooseWord(item)}>
                {item.front_side}
            </p>
          ))
        }
      </div>
      {currentDeck && deckCards && deckCards.length > 0 &&
      <button
          onClick={startRepeating}
          className="addNewDeckForm__addButton">
          REPEAT
        </button>
      }
        {repeatMode && 
      <RepeatingMode 
      setRepeatMode={setRepeatMode} />}
    </>
  );
}  

export default CurrentDeck;
