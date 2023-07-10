import React, { useEffect, useState } from "react";
import './CardsHolder.css';
import DeckCover from '../DeckCover/DeckCover.jsx';
import add from '../../images/add.png';
import { addNewDeck, removeCard, editCard } from '../../services/actions/cards.js';
import { useSelector, useDispatch } from 'react-redux';

function CardsHolder({setAddDeckModalIsOpen}) {

  //const { cards } = useSelector(state => state.cardsReducer);
  const { decks } = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  //const [showAddForm, setShowAddForm] = useState(false);
  /*const [repeatMode, setRepeatMode] = useState(false);
  const [addNewCard, setAddNewCard] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);*/
  const [showCards, setShowCards] = useState(false);
  //const [editItem, setEditItem] = useState(false);
  //const [currentWord, setCurrentWord] = useState({});
  const [addNewDeckForm, setNewDeckFormValue] = useState({ title: '' });
  const [form, setValue] = useState({ text: '', translation: '' });
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [editingForm, setEditedMeaning] = useState({ text: '', translation: '', ID: 0 });
  const [decksToRender, setDecksToRender] = useState([]);
  const [wordsToRepeat, setWordsToRepeat] = useState([]);
  const repeatingInput = document.getElementById('cardsHolderRepeatingInput');

  useEffect(()=> {
    if (decks !== [] && decks !== undefined) 
    setDecksToRender(decks);
  }, [decks])

  function getText() {
    if (decks && decks.length === 0) return "You've got no saved decks. Time to add one";
    if (decks && decks.length !== 0) return `You've got ${decks.length} saved decks`;
  };

  const onAddNewDeckChange = e => {
    setNewDeckFormValue({ ...addNewDeckForm, [e.target.name]: e.target.value });
  };

  function showAddNewDeckForm() {
    setAddDeckModalIsOpen(true);
  }

  return (
    <>
    <section className="cardsHolder__content" id="cardsHolder">
    <h2 className="cardsHolder__title">DECKS</h2>
      <h2 className="cardsHolder__subtitle">{getText()}</h2>
      <div className="cardsHolder__decksContainer">
        {decks !== [] && decks !== undefined && decksToRender !== [] && decksToRender.map((currentItem, index) => (
          <DeckCover 
            key={index} 
            item={currentItem} 
            index={index} />
        ))
        }
        <div className="deckCover" onClick={showAddNewDeckForm}>
          <div className="deckCover__addCover">
            <img 
              src={add} 
              alt='Add new card icon' 
            />
          </div>
        </div>
      </div>
      
      
    </section>
    </>
  );
}  

export default CardsHolder;

/*
 {!addNewCard &&
      <div className='cardsHolder__button-block'>
        {!repeatMode && <button className='cardsHolder__button' onClick={showAddForm}>
          Добавить карточку
        </button>}
        {decks.length !== 0 && decks !== [] && !repeatMode && 
          <button className='cardsHolder__button' onClick={startRepeating}>
            Повторить слова
          </button>}
        {decks !== [] && decks.length !== 0 && !repeatMode && 
          <button className='cardsHolder__button' onClick={showAllCards}>
            Посмотреть на карточки
          </button>}
      </div>}
      {addNewCard && 
      <form className='cardsHolder__form' onSubmit={handleSubmit}>
        <input 
          placeholder="Слово на иностранном языке" 
          value={form.text} 
          name="text" 
          onChange={onChange}
          required
          type="text"
          className='cardsHolder__input'/>
        <input 
          placeholder="Перевод слова" 
          value={form.translation} 
          name="translation" 
          onChange={onChange}
          required
          type="text"
          className='cardsHolder__input' />
        <div className='cardsHolder__button-block'>
          <button 
            className='cardsHolder__button'
            type="submit"
            onClick={handleSubmit}>
              Сохранить
          </button>
          <button 
            className='cardsHolder__button'
            onClick={handleClose}>
              Закрыть
          </button>
        </div>
      </form>}
      {repeatMode && 
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
      </div>}
      <div>
      {showCards && decks !== [] && decks.map((currentItem, i) => (
        <DeckCover key={i} item1={currentItem}/>
        ))
      }
      </div>
      {showCards && decks !== [] && editItem && 
        <form className='cardsHolder__form' onSubmit={handleEditSubmit}>
          <input 
            placeholder='Слово на иностранном языке' 
            value={editingForm.text} 
            name="text" 
            onChange={onEditChange}
            required
            type="text"
            className='cardsHolder__input'/>
          <input 
            placeholder='Более точный перевод' 
            value={editingForm.translation} 
            name="translation" 
            onChange={onEditChange}
            required
            type="text"
            className='cardsHolder__input' />
          <div className='cardsHolder__button-block'>
            <button 
              className='cardsHolder__button'
              type="submit">
                Вот так лучше
            </button>
            <button 
              className='cardsHolder__button'
              onClick={closeEditCard}>
                Оставим как было
            </button>
          </div>
        </form>}
      {showCards && decks !== [] && 
        <button 
          className='cardsHolder__button cardsHolder__button1'
          onClick={hideAllCards}>
            Скрыть
        </button>
      }
      */

      /*
      {showAddForm && 
      <form className='cardsHolder__form' onAddSubmit={handleAddSubmit}>
        <input 
          placeholder="New deck title" 
          value={addNewDeckForm.title} 
          name="title" 
          onChange={onAddNewDeckChange}
          required
          type="text"
          className='cardsHolder__input' />
        <div className='cardsHolder__button-block'>
          <button 
            className='cardsHolder__button'
            type="submit"
            onClick={handleAddSubmit}>
              Save
          </button>
          <button 
            className='cardsHolder__button'
            onClick={handleClose}>
              Close
          </button>
        </div>
      </form>
      }
      */