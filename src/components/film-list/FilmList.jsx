import { Film } from '../film/Film';

export const FilmList = ({ allFilms }) => {
    return (
        <>
          {allFilms.map((film) => <Film key={film.episode_id} film={film} /> )}
        </>
    )
}