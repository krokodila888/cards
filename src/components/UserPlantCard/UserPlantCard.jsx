import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './UserPlantCard.css';
import pensil from '../../images/pensil.png';
import { setCurrentFlower } from '../../../services/actions/currentFlower';
import { setCurrentPlant } from '../../../services/actions/currentPlant';

function UserPlantCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plant } = props;
  const { plants, myFlowers } = useSelector(state => state.plantsReducer);

  const handleClick = e => {
    dispatch(setCurrentFlower(plant));
  }

  const handleLinkClick = e => {
    const linkPlant = plants.find((item) => (item.id === plant.flower_type));
    dispatch(setCurrentPlant(linkPlant));
    navigate(`/catalog/:${linkPlant.id}`);
  }

  return (
    <li className="userPlantCard__card" >
      {plant && plant.name !== undefined && <>
      <img src={plant.image} alt="Изображение цветка" className="userPlantCard__image"/>
      <div className="userPlantCard__text-container">
        <h3 className="userPlantCard__title">Имя: {plant.name}</h3>
        <p className="userPlantCard__subtitle">Вид: <span className='userPlantCard__link' onClick={handleLinkClick}>{plants.find((item) => (item.id === plant.flower_type)).name}</span></p>
        <p className="userPlantCard__subtitle">Режим полива: надо придумать</p>
        <img src={pensil} alt="кнопка редактирования" className="userPlantCard__icon" onClick={handleClick}/>
      </div>
      </>}
    </li>
  )
}

export default UserPlantCard;
