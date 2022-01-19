import { useState } from "react";
import { Link } from 'react-router-dom';

import style from './BurgerMenu.module.scss';


export const BurgerMenu = () => {

    const [isOpen, setOpen] = useState(false);
    
    return (
        <div className={style.burgerMenuContainer}>
            <p onClick={() => setOpen(!isOpen)}>Burger menu</p>
            {isOpen ? (
              <div className={style.sideBarContainer}>
                <p className={style.cancelIcon} onClick={() => {setOpen(false)}}>X</p>
                <Link className={style.linkItem} to="/">Home</Link>
                <Link className={style.linkItem} to="films">Films</Link>
                <Link className={style.linkItem} to="test2">Test2</Link>
                <Link className={style.linkItem} to="test3">Test3</Link>
              </div>
            ): null}
        </div>
    )
}