import style from './Logo.module.scss';
import img from '../../assets/images/logo/sw_logo.png';

export const Logo = () => { 
    return (
        <img className={style.logo} src={img} alt="star wars logo" />
    )
}