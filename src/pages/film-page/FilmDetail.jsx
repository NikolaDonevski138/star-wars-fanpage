import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useLocation } from 'react-router-dom';
import { useSwapiFilms } from '../../store/useSwapiFilms';

const FilmDetails = () => {
    
    const location = useLocation();
    const { fetchFilm, selectedFilm } = useSwapiFilms((state) => ({fetchFilm: state.fetchFilm, selectedFilm: state.selectedFilm}), shallow);


    useEffect(() => {
        fetchFilm(location.state)
    }, [location?.state])

    console.log(selectedFilm, 'selectedFilm')
    return (
        <p>Film Details</p>
    )
}

export default FilmDetails;