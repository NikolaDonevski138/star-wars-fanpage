import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Detail } from '../../components/detail/Detail';

const FilmDetails = () => {

    const location = useLocation();

    const { fetchFilm, selectedFilm } = useSwapiFilms((state) => ({fetchFilm: state.fetchFilm, selectedFilm: state.selectedFilm}));

    useEffect(() => {
        fetchFilm(location.state)
    }, [location?.state])

    return selectedFilm ? (
        <Detail selectedFilm={selectedFilm} />
    ) : <p>Loading</p>
}

export default FilmDetails;