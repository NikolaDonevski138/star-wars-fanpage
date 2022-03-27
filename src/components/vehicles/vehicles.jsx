import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Vehicle } from './vehicle';

export const Vehicles = () => {
  const { fetchAllVehiclesBySelectedFilm, getSelectedFilmVehicles } = useSwapiFilms((state) => ({fetchAllVehiclesBySelectedFilm: state.fetchAllVehiclesBySelectedFilm, getSelectedFilmVehicles : state.selectedFilmVehicles}));

  useEffect(() => {
    fetchAllVehiclesBySelectedFilm()
  }, [fetchAllVehiclesBySelectedFilm])

  return getSelectedFilmVehicles.length ? (
    getSelectedFilmVehicles.map((vehicle, index) => {
      return (<Vehicle key={index} vehicleInfo={vehicle} />)
    })
  ): (
    <p>Loader</p>
  )
};