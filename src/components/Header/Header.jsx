import { NavLink } from 'react-router-dom';
//import 'animate.css';
import './Header.css';
import React from "react";

function Header() {
  //const {loggedIn} = props;
  /*const [isBigger, setIsBigger] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);*/

  /*React.useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (window.innerWidth < 621) {
      setIsBigger(false);      
    }
    if (window.innerWidth >= 621) {
      setIsBigger(true);      
    }
  }, [])*/

  return (
    <header className="header">
      <h1 className="header__title header__link-text">Excellent place to memorize words</h1>
    </header>
    );
  }
  
  export default Header;

  /*
  {!loggedIn ? 
      (<>
      <div className="header__content">
        <NavLink to="/catalog" end={true} className={({ isActive }) => 
          (isActive ? 'header__link header__first-link header__logo-block-main' : "header__first-link header__link header__link-font")}>
            <img
              src={leaf7}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Справочник
            </p>
        </NavLink>
        <NavLink to="/" end={true} className={({ isActive }) => 
            (isActive ? 'header__logo-block header__logo-block-main' : "header__logo-block header__link-font header__logo-inactive")}>
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
          <h2 className="header__title header__link-text">
            How to flower
          </h2>
        </NavLink>
        <div className="header__right-block">
          <NavLink to="/sign-up" className={({ isActive }) => 
            (isActive ? 'header__link header__logo-block-main' : "header__link header__link-font")}>
            <img
              src={leaf2}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Регистрация
            </p>
          </NavLink>
          <NavLink to="/sign-in" className={({ isActive }) => 
            (isActive ? 'header__link header__logo-block-main' : "header__link header__link-font")}>
            <img
              src={leaf5}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Вoйти
            </p>            
          </NavLink>
        </div>      
      </div>      
      <div className='header__underline'></div> 
      </>) : (
      <>
      <div className="header__content">
        <NavLink to="/" end={true} className={({ isActive }) => 
            (isActive ? 'header__logo-block header__logo-block-main' : "header__logo-block header__link-font header__logo-inactive")}>
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
          <h2 className="header__title header__link-text">
            How to flower
          </h2>
        </NavLink>
        <div className="header__right-block">
        <NavLink to="catalog" end={true} className={({ isActive }) => 
          (isActive ? 'header__link header__logo-block-main header__first-link' : "header__first-link header__link header__link-font")}>
            <img
              src={leaf7}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Справочник
            </p>
        </NavLink>
          <NavLink to="/sign-up" className={({ isActive }) => 
            (isActive ? 'header__link header__logo-block-main' : "header__link header__link-font")}>
            <img
              src={leaf2}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Регистрация
            </p>
          </NavLink>
          <NavLink to="/sign-in" className={({ isActive }) => 
            (isActive ? 'header__link header__logo-block-main' : "header__link header__link-font")}>
            <img
              src={leaf5}
              alt="Листик растет из горшка"
              className="header__leaf"
            />
            <p className="header__link-text">
              Вoйти
            </p>            
          </NavLink>
        </div>
      </div>
      <div className='header__underline'></div> 
      </>)}
      */
