import style from "./logo.module.scss";
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to="/">
      <img
        className={style.logo}
        src="assets/images/logo/sw_logo.png"
        alt="star wars logo"
      />
    </Link>
  );
};
