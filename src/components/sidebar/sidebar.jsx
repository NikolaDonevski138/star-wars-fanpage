import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import { useBurgerMenu } from '../../store/useBurgerMenu';

import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { CartIcon } from "../cart-icon/cart-icon";

import style from "./sidebar.module.scss";

export const SideBar = () => {

  const { setClose, isOpened } = useBurgerMenu(
    (state) => ({
      setClose: state.setClose,
      isOpened: state.isOpened
    })
  );

  return isOpened ? (
    <div className={style.sideBarContainer}>
      <div className={style.iconContainer}>
        <p
          className={style.cancelIcon}
          onClick={() => setClose()}
        >
          <img
            className={style.exitButton}
            src="assets/images/exit/exit.png"
            alt="exit icon"
          />
        </p>
      </div>
      <Box>
        <List role="menubar" column>
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="#horizontal-list"
              aria-label="Home"
            >
              <Link className={style.navbarItem} to="/">
                Home
              </Link>
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="films"
              aria-label="Home"
            >
              <Link className={style.navbarItem} to="films">
                Legacy Films
              </Link>
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="films"
              aria-label="Home"
            >
              <Link className={style.navbarItem} to="shop">
                Shop
              </Link>
            </ListItemButton>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton
              role="menuitem"
              component="a"
              href="films"
              aria-label="Home"
            >
              <Link className={style.navbarItem} to="cart">
                <CartIcon />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  ) : null;
};
