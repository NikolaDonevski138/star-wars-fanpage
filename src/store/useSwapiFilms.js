import create from 'zustand';
import { swapi } from '../api/swapi';

import { concatImagesToResponse } from './helpers/concat-images-to-response';
import { getFilmDetailsByName } from './helpers/get-film-details-by-name';

export const useSwapiFilms = create((set, getState) => ({
    allFilms: [],
    selectedFilm: [],
    selectedFilmPlanets: [],
    selectedFilmStarships: [],
    selectedFilmVehicles: [],
    selectedFilmSpecies: [],
    fetchAllFilms: async () => {
        const response = await swapi().getAllFilms();
        set({ allFilms: concatImagesToResponse(response.data.results)})
    },
    fetchFilm: (filmName) => {
      set({selectedFilm: getFilmDetailsByName(filmName, getState().allFilms)})
    },
    fetchAllPlanetsBySelectedFilm: async() => {
      if (!getState().selectedFilm.planets.length) {
        return;
      }
      const listOfPlanetsBySelectedFilm = getState().selectedFilm?.planets;
      const planets = await swapi(listOfPlanetsBySelectedFilm).getSubjectsBySelectedFilm();
      const mergedResponseWithImages = concatImagesToResponse(planets);
      set({selectedFilmPlanets: mergedResponseWithImages})
    },
    fetchAllStarshipsBySelectedFilm: async() => {
      if (!getState().selectedFilm.starships.length) {
        return;
      }
      const listOfStarshipsBySelectedFilm = getState().selectedFilm?.starships;
      const starships = await swapi(listOfStarshipsBySelectedFilm).getSubjectsBySelectedFilm();
      const mergedResponseWithImages = concatImagesToResponse(starships);
      set({selectedFilmStarships: mergedResponseWithImages});
    },
    fetchAllVehiclesBySelectedFilm: async() => {
      if (!getState().selectedFilm.vehicles.length) {
        return;
      }
      const listOfVehiclesBySelectedFilm = getState().selectedFilm?.vehicles;
      const starships = await swapi(listOfVehiclesBySelectedFilm).getSubjectsBySelectedFilm();
      const mergedResponseWithImages = concatImagesToResponse(starships);
      set({selectedFilmVehicles: mergedResponseWithImages});
    },
    fetchAllSpeciesBySelectedFilm: async() => {
      if (!getState().selectedFilm.species.length) {
        return;
      }
      const listOfSpeciesBySelectedFilm = getState().selectedFilm?.species;
      const species = await swapi(listOfSpeciesBySelectedFilm).getSubjectsBySelectedFilm();
      const mergedResponseWithImages = concatImagesToResponse(species);
      set({selectedFilmSpecies: mergedResponseWithImages});
    }
}))