import React from 'react';
import c from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
    <header className={c.header}>
        <img src="https://f990335bdbb4aebc3131-b23f11c2c6da826ceb51b46551bfafdc.ssl.cf2.rackcdn.com/images/5f75d8c7f181c17be50d26ead9b9a88b41e7e567.png" alt=""/>

        <div className={c.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    )
}

export default Header;