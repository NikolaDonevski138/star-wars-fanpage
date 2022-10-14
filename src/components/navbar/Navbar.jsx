import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { CartIcon } from "../cart-icon/cart-icon";
import { Logo } from "../logo/logo";

import style from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <Box
        component="nav"
        aria-label="My site"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          mx: 5,
          my: 2,
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box>
          <List role="menubar" row>
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
      </Box>
    </div>
  );
};
