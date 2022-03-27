import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Planet } from './planet';

export const Planets = () => {
  const { fetchPlanetsBySelectedFilm, getSelectedFilmPlanets } = useSwapiFilms((state) => ({fetchPlanetsBySelectedFilm: state.fetchAllPlanetsBySelectedFilm, getSelectedFilmPlanets : state.selectedFilmPlanets}));

  useEffect(() => {
    fetchPlanetsBySelectedFilm()
  }, [fetchPlanetsBySelectedFilm])

  return getSelectedFilmPlanets.length ? (
    getSelectedFilmPlanets.map((planet, index) => {
      return (<Planet key={index} planetInfo={planet} />)
    })
  ): (
    <p>Loader</p>
  )
};