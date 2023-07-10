import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './AddNewDeckForm.css';
import { addNewDeck, removeCard, editCard } from '../../services/actions/cards.js';
import { useSelector, useDispatch } from 'react-redux';

function AddNewDeckForm ({addNewDeckModalIsOpen, closeAddDeckModalIsOpen}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { decks } = useSelector(state => state.cardsReducer);
  //const { userDataRequestRes } = useSelector(state => state.authReducer);
  const [form, setValue] = useState({ title: '', description: '' });
  const titleInput = document.getElementById('titleAddFormInput');
  const descriptionInput = document.getElementById('descriptionAddFormInput');
  const submitButton = document.getElementById('buttonSubmitAddForm');
  const titleErrorSpan = document.getElementById('titleSpanAddForm');
  const descriptionErrorSpan = document.getElementById('descriptionSpanAddForm');

  function validate() {
    if(titleInput && descriptionInput && !(titleInput.validationMessage || descriptionInput.validationMessage)) 
    return (submitButton.classList.remove('editProfileForm__button-disabled'), submitButton.classList.add('editProfileForm__button-active', 'button_type_primary'), submitButton.disabled = false); 
    else if (titleInput && descriptionInput) return (submitButton.classList.remove('editProfileForm__button-active', 'button_type_primary'), submitButton.classList.add('editProfileForm__button-disabled'), submitButton.disabled = true)
  }

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
    validate()
  };

  useEffect(()=> {
    if (addNewDeckModalIsOpen) {
    setValue({ ...form, title: '', descriptionInput: '' });
  }
    if (addNewDeckModalIsOpen && submitButton !== null) {
      submitButton.classList.remove('editProfileForm__button-active', 'button_type_primary');
      submitButton.classList.add('editProfileForm__button-disabled');
      submitButton.disabled = true;
    };
  if (addNewDeckModalIsOpen && titleErrorSpan && titleErrorSpan.textContent !== null) {
    titleErrorSpan.textContent = ''; 
  }
  if (addNewDeckModalIsOpen && descriptionErrorSpan && descriptionErrorSpan.textContent !== null) {
    descriptionErrorSpan.textContent = ''; 
  }
  }, [addNewDeckModalIsOpen])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNewDeck(form));
    closeAddDeckModalIsOpen()
  }

  /*
    function handleAddSubmit() {
    dispatch(addNewDeck(addNewDeckForm));
    setShowAddForm(false);
    setNewDeckFormValue({ title: '' })
  };

  function handleClose() {
    setShowAddForm(false);
    setNewDeckFormValue({ title: '' })
  };
  */

  return(
    <div className="addNewDeckForm">
      <h2 className="addNewDeckForm__title">
        NEW DECK
      </h2>
      <div className="addNewDeckForm__container">
      <form 
        onSubmit={handleSubmit} 
        className="addNewDeckForm__form">
        <label>
          DECK TITLE
        <input 
          required 
          name="title"
          id='titleAddFormInput'
          type="text" 
          value={form.title}
          onChange={e => {
            onChange(e);
            if (titleInput) 
            return (titleErrorSpan.textContent = titleInput.validationMessage);}}
          className="profile__text profile__row-container"/>
        <span 
          className="login__text input-userNameEditProfile-error login__input-error" 
          id='titleSpanAddForm'> 
        </span>
        </label>
        <label>
          DESCRIPTION
        <input
          name="description" 
          id='descriptionAddFormInput'
          type="text" 
          value={form.description}
          onChange={e => {
            onChange(e);
            if (descriptionInput) 
            return (descriptionErrorSpan.textContent = descriptionInput.validationMessage)}} 
          className="profile__text profile__row-container"/>
        <span 
          className="login__text input-emailEditProfile-error login__input-error" 
          id='descriptionSpanAddForm'> 
        </span>
        </label>
        <button 
          type="submit" 
          className="addNewDeckForm__addButton addNewDeckForm__button-disabled" id='buttonSubmitAddForm'>
          ADD
        </button>
      </form> 
      </div>
    </div>
  )
}

export default AddNewDeckForm;

/*
//если однажды захотим добавить пароль
//placeholder={userDataRequestRes.username}
//placeholder={userDataRequestRes.first_name}
        <input 
          required  
          name="password" 
          placeholder="Пароль" 
          type="text" 
          value={form.password}
          onChange={onChange} 
          className="profile__text profile__row-container"/>
*/