import style from './Film.module.scss';
import { useNavigate } from 'react-router-dom';

export const Film = ({film}) => {
    const navigate = useNavigate();
    
    const onNavigate = () => {
        navigate('/filmdetails', {state: film?.title })
    }

    return (
        <div onClick={() => onNavigate()} className={style.filmItemContainer}>
            <div className={style.filmInfo}>
                <h1>Star Wars: {film.title}</h1>
                <p>Films</p>
            </div>
            <div className={style.filmImageContainer}>
                <img className={style.filmImage} src={film.img} alt='img' />
            </div>
        </div>
    );  
}