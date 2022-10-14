import style from './logo.module.scss';

export const Logo = () => { 
    return (
        <img className={style.logo} src="assets/images/logo/sw_logo.png" alt="star wars logo" />
    )
}