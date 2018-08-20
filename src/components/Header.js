import React from 'react';
import { Link } from 'react-router-dom';

//Stateless function component
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-wrap">

                <div className="header__title">
                    <p className="header__title--name">
                    <Link to="/">Welcome to React</Link>
                    </p>
                </div>

                <nav className="header__menu">
                    <a className="header__menu--item" href="">Добавить</a>
                    <a className="header__menu--item" href="">О нас</a>
                </nav>


            </div>
        </header>
    )
}


export default Header;