import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useLocation } from 'react-router-dom';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Detail } from '../../components/detail/Detail';

const FilmDetails = () => {

    const location = useLocation();
    const { fetchFilm, selectedFilm } = useSwapiFilms((state) => ({fetchFilm: state.fetchFilm, selectedFilm: state.selectedFilm}), shallow);


    useEffect(() => {
        fetchFilm(location.state)
    }, [location?.state])

    return (
          <Detail selectedFilm={selectedFilm} />
    )
}

export default FilmDetails;