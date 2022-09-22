import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { CartIcon } from "../cart-icon/cart-icon";

import style from "./BurgerMenu.module.scss";

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
          <p
            className={style.cancelIcon}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img className={style.exitButton} src="assets/images/exit/exit.png" alt="exit icon" />
          </p>
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
      ) : null}
    </div>
  );
};
