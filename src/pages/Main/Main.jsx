import React from "react";
import DeckCover from '../../components/DeckCover/DeckCover.jsx';
import Login from '../../components/Login/Login.jsx';
import CardsHolder from '../../components/CardsHolder/CardsHolder.jsx';
import CurrentDeck from '../../components/CurrentDeck/CurrentDeck.jsx';
import Register from '../../components/Register/Register.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import EditDeckForm from '../../components/EditDeckForm/EditDeckForm.jsx';
import AddNewDeckForm from '../../components/AddNewDeckForm/AddNewDeckForm.jsx';
import AddNewWordForm from '../../components/AddNewWordForm/AddNewWordForm.jsx';

import Modal from "../../components/Modal/Modal";
import './Main.css';

function Main(props) {
  const {loggedIn, setLoggedIn, closeModal, addDeckModalIsOpen, setAddDeckModalIsOpen, editDeckModalIsOpen, setEditDeckModalIsOpen, addWordModalIsOpen, setAddWordModalIsOpen, editWordModalIsOpen, setEditWordModalIsOpen} = props;
  //const dispatch = useDispatch();
  const [showLogin, setShowLogin] = React.useState(true);
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function closeAddDeckModalIsOpen() {
    setAddDeckModalIsOpen(false)
  }

  function closeEditDeckModal() {
    setEditDeckModalIsOpen(false)
  }

  function closeAddWordModal() {
    setAddWordModalIsOpen(false)
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  return (
    <>
      <Header/>
      <div className="main__content">
        <main className="profile">
          {!loggedIn && 
          <>
            {showLogin && 
            <Login
              setShowLogin={setShowLogin} />}
            {!showLogin && 
            <Register
              setShowLogin={setShowLogin} />}
          </>}
          {loggedIn && 
            <CardsHolder
              setAddDeckModalIsOpen={setAddDeckModalIsOpen}/>}
          {loggedIn && currentDeck !== {} && currentDeck !== null && currentDeck !== undefined &&
            <CurrentDeck 
              addDeckModalIsOpen={addDeckModalIsOpen}
              setAddDeckModalIsOpen={setAddDeckModalIsOpen}
              editDeckModalIsOpen={editDeckModalIsOpen}
              setEditDeckModalIsOpen={setEditDeckModalIsOpen}
              setAddWordModalIsOpen={setAddWordModalIsOpen}/>}
        </main>
        {loggedIn && 
        <button
          onClick={handleLogout}
          className="addNewDeckForm__addButton">
          EXIT
        </button>}
      </div>
      <Footer/>
      <Modal
        isOpen={addDeckModalIsOpen}
        onClose={closeModal}
        children={
          <AddNewDeckForm 
            closeAddDeckModalIsOpen={closeAddDeckModalIsOpen}
            addDeckModalIsOpen={addDeckModalIsOpen} />}>
      </Modal>
      <Modal
        isOpen={editDeckModalIsOpen}
        onClose={closeModal}
        children={
          <EditDeckForm 
            closeEditDeckModal={closeEditDeckModal} 
            editDeckModalIsOpen={editDeckModalIsOpen} />}>
      </Modal>
      <Modal
        isOpen={addWordModalIsOpen}
        onClose={closeModal}
        children={
          <AddNewWordForm 
            closeAddWordModal={closeAddWordModal}
            addWordModalIsOpen={addWordModalIsOpen} />}>
      </Modal>

    </>
  );
}  

export default Main;

/*
      <Modal
        isOpen={editDeckModalIsOpen}
        onClose={closeModal}
        children={
          <EditDeckForm 
            handleEditDeckData={handleEditDeck} 
            editDeckModalIsOpen={editDeckModalIsOpen} />}>
      </Modal>
      <Modal
        isOpen={addWordModalIsOpen}
        onClose={closeModal}
        children={
          <AddWordForm 
            handleaddWord={handleAddWord}
            addWordModalIsOpen={addWordModalIsOpen} />}>
      </Modal>
      <Modal
        isOpen={editWordModalIsOpen}
        onClose={closeModal}
        children={
          <EditWordForm 
            handleEditWord={handleEditWord}
            editWordModalIsOpen={editWordModalIsOpen} />}>
      </Modal>
      */