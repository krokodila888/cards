import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './EditWordForm.css';
import { addNewDeck, removeCard, editCard, addNewCard } from '../../services/actions/cards.js';
import { setCurrentWord } from '../../services/actions/currentDeck.js';
import { useSelector, useDispatch } from 'react-redux';

function EditWordForm (props) {
  const {editWordModalIsOpen, closeEditWordModal} = props;
  const dispatch = useDispatch();
  const { deckCards, editCardRequestRes } = useSelector(state => state.cardsReducer);
  const { currentDeck, currentWord } = useSelector(state => state.currentDeckReducer);
  const [form, setValue] = useState({front_side: '', back_side: '', prompt: '', example: '' });
  const [deckSlug, setDeckSlug] = useState('');
  const titleInput = document.getElementById('titleAddFormInput');
  const descriptionInput = document.getElementById('descriptionAddFormInput');
  const submitButton = document.getElementById('buttonSubmitAddForm');
  const titleErrorSpan = document.getElementById('titleSpanAddForm');
  const descriptionErrorSpan = document.getElementById('descriptionSpanAddForm');

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(()=> {
    if (editWordModalIsOpen) {
      setDeckSlug(currentDeck.slug);
      setValue({front_side: currentWord.front_side, back_side: currentWord.back_side, prompt: currentWord.prompt, example: currentWord.example })
    }
  }, [editWordModalIsOpen])

  function handleSubmit(e) {
    e.preventDefault();
    console.log({deckSlug, form});
    console.log(form);
    console.log(currentWord.id);
    dispatch(editCard(deckSlug, currentWord.id, form));
    closeEditWordModal()
  }

  return(
    <div className="addNewDeckForm">
      <h2 className="addNewDeckForm__title">
        EDIT WORD
      </h2>
      <div className="addNewDeckForm__container">
        <form 
          onSubmit={handleSubmit} 
          className="addNewDeckForm__form">
          <label className="addNewDeckForm__label">
            WORD
            <input 
              required 
              name="front_side"
              id='titleAddFormInput'
              type="text" 
              value={form.front_side}
              onChange={e => {
                onChange(e);
                /*if (titleInput) 
              return (titleErrorSpan.textContent = titleInput.validationMessage);*/}}
              className="addNewDeckForm__text addNewDeckForm__title-container"/>
            <span 
              className="login__text input-userNameEditProfile-error login__input-error" 
              id='titleSpanAddForm'> 
            </span>
          </label>
          <label className="addNewDeckForm__label">
            TRANSLATION
            <input
              name="back_side" 
              id='descriptionAddFormInput'
              type="text" 
              value={form.back_side}
              onChange={e => {
                onChange(e);
                /*if (descriptionInput) 
              return (descriptionErrorSpan.textContent = descriptionInput.validationMessage)*/}} 
              className="addNewDeckForm__description-text addNewDeckForm__description-container"/>
            <span 
              className="login__text input-emailEditProfile-error login__input-error" 
              id='descriptionSpanAddForm'> 
            </span>
          </label>
          <label className="addNewDeckForm__label">
            DESCRIPTION OR PROMPT
            <input
              name="prompt" 
              id='descriptionAddFormInput'
              type="text" 
              value={form.prompt}
              onChange={e => {
                onChange(e);
                /*if (descriptionInput) 
              return (descriptionErrorSpan.textContent = descriptionInput.validationMessage)*/}} 
              className="addNewDeckForm__description-text addNewDeckForm__middle-input"/>
            <span 
              className="login__text input-emailEditProfile-error login__input-error" 
              id='descriptionSpanAddForm'> 
            </span>
          </label>
          <label className="addNewDeckForm__label">
            EXAMPLES OF USING
            <input
              name="example" 
              id='descriptionAddFormInput'
              type="text" 
              value={form.example}
              onChange={e => {
                onChange(e);
                /*if (descriptionInput) 
              return (descriptionErrorSpan.textContent = descriptionInput.validationMessage)*/}} 
              className="addNewDeckForm__description-text addNewDeckForm__middle-input"/>
            <span 
              className="login__text input-emailEditProfile-error login__input-error" 
              id='descriptionSpanAddForm'> 
            </span>
          </label>
          <button 
            type="submit" 
            className="addNewDeckForm__addButton addNewDeckForm__button-disabled" 
            id='buttonSubmitAddWordForm'>
            SAVE
          </button>
        </form>
        <div className="addNewDeckForm__deck">
          <div className="addNewDeckForm__cover">
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditWordForm;
