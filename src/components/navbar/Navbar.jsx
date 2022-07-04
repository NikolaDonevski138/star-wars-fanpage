import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

export const Navbar = () => {
    return  (
        <div className={style.navbarContainer}>
            <Link className={style.navbarItem} to="/">Home</Link>
            <Link className={style.navbarItem} to="films">Legacy Films</Link>
            <Link className={style.navbarItem} to="shop">Shop</Link>
        </div>
    )
}