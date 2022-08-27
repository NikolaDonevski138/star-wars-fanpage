import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../cart-icon/cart-icon';

import style from './Navbar.module.scss';

export const Navbar = () => {
    return  (
        <div className={style.navbarContainer}>
            <Link className={style.navbarItem} to="/">Home</Link>
            <Link className={style.navbarItem} to="films">Legacy Films</Link>
            <Link className={style.navbarItem} to="shop">Shop</Link>
            <Link className={style.navbarItem} to="cart"><CartIcon /></Link>
        </div>
    )
}