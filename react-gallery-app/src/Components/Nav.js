import React from 'react';
import {NavLink} from 'react-router-dom';

//Below will route and add Header links to the top of the photo app.

const Nav = () => (
    <nav className="main-nav">
        <ul className="main-nav">
            <li> <NavLink to="/wonderwoman"> Wonder Woman</NavLink></li>
            <li> <NavLink to="/captainmarvel"> Captain Marvel</NavLink></li>
            <li> <NavLink to="/blackwidow"> Black Widow </NavLink></li>
        </ul>
    </nav>
);

export default Nav;