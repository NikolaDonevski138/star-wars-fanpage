import { useEffect } from 'react';
import { useSwapiFilms } from '../../store/useSwapiFilms';
import { Vehicle } from './vehicle';

export const Vehicles = () => {

  const { fetchSelectedFilmVehicles, selectedFilmVehicles } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmVehicles()
  }, [fetchSelectedFilmVehicles])

  return selectedFilmVehicles.length ? (
    selectedFilmVehicles.map((vehicle, index) => {
      return (<Vehicle key={index} vehicleInfo={vehicle} />)
    })
  ): (
    <p>Loader</p>
  )
};