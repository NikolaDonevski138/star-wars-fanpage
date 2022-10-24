import { useBurgerMenu } from "../../store/useBurgerMenu";

import style from "./burger-menu.module.scss";

export const BurgerMenu = () => {

  const { setOpen, isOpened } = useBurgerMenu(
    (state) => ({
      setOpen: state.setOpen,
      isOpened: state.isOpened
    })
  );

  return !isOpened ? (
    <div className={style.burgerMenuContainer}>
      <div className={style.burgerMenu} onClick={() => setOpen()}>
        <div className={style.burgerMenuItem}></div>
        <div className={style.burgerMenuItem}></div>
        <div className={style.burgerMenuItem}></div>
      </div>
    </div>
  ) : null;
};
