import style from './Logo.module.scss';

export const Logo = () => { 
    return (
        <img className={style.logo} src="assets/images/logo/sw_logo.png" alt="star wars logo" />
    )
}