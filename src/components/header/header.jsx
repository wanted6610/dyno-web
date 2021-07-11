import React from 'react';
import header__img from '../../img/header__img.png';
import logo from '../../img/logo.svg';
import Link from './link/link';
import './header.css';

const Header = () => {
    return(
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header-top">
                        <img className="logo" src={logo} alt="logo" />
                        <nav className="header-top__navigation navigation">
                            <ul className="navigation__list">
                                <Link to="/home" title="Главная" />
                                <Link to="/workers" title="Сотрудники" />
                                <Link to="/contacts" title="Контакты" />                                        
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="header-bottom">
                <div className="container">
                    <img className="header__img" src={header__img} alt="Dyno" />    
                </div>

            </div>
        </div>
    )
}

export default Header;