import React from 'react';
import { NavLink } from 'react-router-dom';



const Link = (props) => {
    return(
        <li className="navigation__item">
            <NavLink className="navigation__link" to={props.to}>{props.title}</NavLink>
        </li>
    )
}

export default Link;