import React, { useEffect, useState } from "react";
import './RepeatingMode.css';
import { addNewDeck, removeCard, editCard, deleteDeck, editDeck, getDeckCardsInfo } from '../../services/actions/cards.js';
import { useSelector, useDispatch } from 'react-redux';

function RepeatingMode(props) {

  //const dispatch = useDispatch();
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
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
    setCurrentWord(deckCards[0]);}
  }, [])

  useEffect(()=> {
    if (deckCards && deckCards !== []) {
      setWordsToRepeat(deckCards);
      setCurrentWord(deckCards[0]);
    }
  }, [deckCards])

  useEffect(()=> {
    console.log(wordsToRepeat);
    console.log(currentWord)
  }, [currentWord])

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
      {currentWord && currentWord !== {} &&
      <p className="cardsHolder__title">
        {currentWord.back_side}
      </p>
      }
      {showWord && 
      <>
        {currentWord && currentWord !== {} && 
        <>
          <p className="cardsHolder__title">
            {currentWord.front_side}
          </p>
          <p>
            Рекомендуем напечатать правильный вариант все равно: так он лучше запомнится
          </p>
        </>}
      </>}
    </>
    )
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
    else {setCurrentWord({front_side: 'Правда все. Добавьте новые карточки (или подождите, пока мы добавим кнопку "Начать заново"', back_side: 'Вы повторили все!'})}
  }


  return (
    <>
      <div className='cardsHolder__form'>
        <div>
          {word()}
        </div>
        <input 
          placeholder="Print your word here" 
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
            className='cardsHolder__button2'
            onClick={showTranslation}>
              SHOW WORD
          </button>
          <button 
            className='cardsHolder__button2'
            onClick={stopRepeating}>
              FINISH REPEATING
          </button>
          <button 
            className='cardsHolder__button2'
            onClick={nextWord1}>
              NEXT ONE
          </button>
        </div>
      </div>
    </>
  );
}  

export default RepeatingMode;
