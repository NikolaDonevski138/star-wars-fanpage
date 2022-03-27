import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Starship } from './starship';

export const Starships = () => {
  const { fetchStarshipsBySelectedFilm, getSelectedFilmStarships } = useSwapiFilms((state) => ({fetchStarshipsBySelectedFilm: state.fetchAllStarshipsBySelectedFilm, getSelectedFilmStarships : state.selectedFilmStarships}));

  useEffect(() => {
    fetchStarshipsBySelectedFilm()
  }, [fetchStarshipsBySelectedFilm])

  return getSelectedFilmStarships.length ? (
    getSelectedFilmStarships.map((starship, index) => {
      return (<Starship key={index} starshipInfo={starship} />)
    })
  ): (
    <p>Loader</p>
  )
};