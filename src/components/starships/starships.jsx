import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Starship } from './starship';

export const Starships = () => {
  const { fetchSelectedFilmStarships, getSelectedFilmStarships } = useSwapiFilms((state) => ({fetchSelectedFilmStarships: state.fetchSelectedFilmStarships, getSelectedFilmStarships : state.selectedFilmStarships}));

  useEffect(() => {
    fetchSelectedFilmStarships()
  }, [fetchSelectedFilmStarships])

  return getSelectedFilmStarships.length ? (
    getSelectedFilmStarships.map((starship, index) => {
      return (<Starship key={index} starshipInfo={starship} />)
    })
  ): (
    <p>Loader</p>
  )
};