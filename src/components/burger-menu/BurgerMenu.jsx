import { useState } from "react";
import { Link } from 'react-router-dom';
import { CartIcon } from '../cart-icon/cart-icon';

import style from './BurgerMenu.module.scss';


export const BurgerMenu = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className={style.burgerMenuContainer}>
            <div className={style.burgerMenu} onClick={() => setOpen(!isOpen)}>
              <div className={style.burgerMenuItem}></div>
              <div className={style.burgerMenuItem}></div>
              <div className={style.burgerMenuItem}></div>
            </div>
            {isOpen ? (
              <div className={style.sideBarContainer}>
                <p className={style.cancelIcon} onClick={() => {setOpen(false)}}>X</p>
                <Link className={style.linkItem} to="/">Home</Link>
                <Link className={style.linkItem} to="films">Legacy Films</Link>
                <Link className={style.linkItem} to="shop">Shop</Link>
                <Link className={style.navbarItem} to="cart"><CartIcon /></Link>
              </div>
            ): null}
        </div>
    )
}