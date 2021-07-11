import React from 'react';
import Link from '../header/link/link';
import logo from '../../img/logo.svg';
import './footer.css';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                <img className="logo" src={logo} alt="logo" />
                    <nav className="footer__navigation navigation">
                        <ul className="navigation__list">
                        <Link to="/home" title="Главная" />
                        <Link to="/workers" title="Сотрудники" />
                        <Link to="/contacts" title="Контакты" />               
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

