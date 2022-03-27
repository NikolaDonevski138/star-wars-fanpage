import create from 'zustand';
import { swapi } from '../api/swapi';

import { concatImagesToResponse } from './helpers/concat-images-to-response';
import { getFilmDetailsByName } from './helpers/get-film-details-by-name';

export const useSwapiFilms = create((set, getState) => ({
    allFilms: [],
    selectedFilm: [],
    selectedFilmPlanets: [],
    fetchAllFilms: async () => {
        const response = await swapi().getAllFilms();
        console.log(response, 'tess')
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
      console.log(planets, 'planets')
      const mergedResponseWithImages = concatImagesToResponse(planets);
      set({selectedFilmPlanets: [...mergedResponseWithImages]})
    }
}))