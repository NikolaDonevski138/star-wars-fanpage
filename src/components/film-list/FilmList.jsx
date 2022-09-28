import { Film } from '../film/Film';
import style from './film-list.module.scss';

export const FilmList = ({ allFilms }) => {
    return (
        <div className={style.filmListContainer}>
          {allFilms.map((film) => <Film key={film.episode_id} film={film} /> )}
        </div>
    )
}