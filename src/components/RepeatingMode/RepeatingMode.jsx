import React, { useEffect, useState } from "react";
import './RepeatingMode.css';
import DeckCover from '../DeckCover/DeckCover.jsx';
import add from '../../images/add_button.png';
import dots from '../../images/dots.png';
import find from '../../images/find.png';
import { addNewDeck, removeCard, editCard, deleteDeck, editDeck, getDeckCardsInfo } from '../../services/actions/cards.js';
import { setCurrentDeck } from '../../services/actions/currentDeck.js';
import { useSelector, useDispatch } from 'react-redux';

function RepeatingMode(props) {

  const dispatch = useDispatch();
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  //const [showCards, setShowCards] = useState(false);
  const [currentWord, setCurrentWord] = useState({});
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [wordsToRepeat, setWordsToRepeat] = useState([]);
  const repeatingInput = document.getElementById('cardsHolderRepeatingInput');

  const {setRepeatMode} = props;
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const { deckCards } = useSelector(state => state.cardsReducer);

  useEffect(()=> {
    if (deckCards && deckCards !== []) 
    {setWordsToRepeat(deckCards);
    setCurrentWord(wordsToRepeat[0]);}
  }, [])

  useEffect(()=> {
    if (deckCards && deckCards !== []) {
      setWordsToRepeat(deckCards);
      setCurrentWord(wordsToRepeat[0]);
    }
  }, [deckCards])

  function showTranslation() {
    setShowWord(true);
  };

  const onRepeatChange = e => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  function stopRepeating() {
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    setRepeatMode(false)
  }

  function word() {
    return (
    <>
      <p className="cardsHolder__title">
        {currentWord.back_side}
      </p>
      {showWord && 
      <>
        <p className="cardsHolder__title">
          {currentWord.front_side}
        </p>
        <p>Рекомендуем напечатать правильный вариант все равно: так он лучше запомнится</p>
      </>}
    </>)
  }

  useEffect(()=> {
    if (repeatingInput && (currentWord.front_side === repeatingForm.word)) 
    {setIsCorrect(true);
    repeatingInput.classList.add('cardsHolder__input_active');};
    if (repeatingInput && (currentWord.front_side !== repeatingForm.word) && isCorrect) {
      setIsCorrect(false);
      repeatingInput.classList.remove('cardsHolder__input_active');};
  }, [repeatingForm])

  function nextWord1() {
    setRepeatedWords([...repeatedWords, currentWord]);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    repeatingInput.classList.remove('cardsHolder__input_active');
    if (wordsToRepeat.length > 1) {setCurrentWord(wordsToRepeat[1]); 
    setWordsToRepeat(wordsToRepeat.slice(1));}
    else {setCurrentWord({text: 'Правда все. Добавьте новые карточки (или подождите, пока мы добавим кнопку "Начать заново"', translation: 'Вы повторили все!'})}
  }


  return (
    <>
      <div className='cardsHolder__form'>
        <div>
          {word()}
        </div>
        <input 
          placeholder="Место для правильного значения" 
          value={repeatingForm.word} 
          id='cardsHolderRepeatingInput'
          type="text"
          name="word" 
          onChange={onRepeatChange}
          required
          className='cardsHolder__input'
          autoComplete="off" />
        <div className='cardsHolder__button-block'>
          <button 
            className='cardsHolder__button'
            onClick={showTranslation}>
              Показать слово
          </button>
          <button 
            className='cardsHolder__button'
            onClick={stopRepeating}>
              Закончить
          </button>
          <button 
            className='cardsHolder__button'
            onClick={nextWord1}>
              Следующая
          </button>
        </div>
      </div>
    </>
  );
}  

export default RepeatingMode;
