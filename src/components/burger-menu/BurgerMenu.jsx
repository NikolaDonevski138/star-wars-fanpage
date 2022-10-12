import { useBurgerMenu } from "../../store/useBurgerMenu";

import style from "./BurgerMenu.module.scss";

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
      {/* {isOpen ? (
        <div className={style.sideBarContainer}>
          <p
            className={style.cancelIcon}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img
              className={style.exitButton}
              src="assets/images/exit/exit.png"
              alt="exit icon"
            />
          </p>
        </div>
      ) : null} */}
    </div>
  ) : null;
};
