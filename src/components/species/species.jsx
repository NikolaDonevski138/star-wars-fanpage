import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Specie } from './specie';

export const Species = () => {
  const { fetchAllSpeciesBySelectedFilm, getSelectedFilmSpecies } = useSwapiFilms((state) => ({fetchAllSpeciesBySelectedFilm: state.fetchAllSpeciesBySelectedFilm, getSelectedFilmSpecies : state.selectedFilmSpecies}));

  useEffect(() => {
    fetchAllSpeciesBySelectedFilm()
  }, [fetchAllSpeciesBySelectedFilm])

  return getSelectedFilmSpecies.length ? (
    getSelectedFilmSpecies.map((specie, index) => {
      return (<Specie key={index} specieInfo={specie} />)
    })
  ): (
    <p>Loader</p>
  )
};