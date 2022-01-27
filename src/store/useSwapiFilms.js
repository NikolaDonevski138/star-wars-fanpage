import create from 'zustand';
import { swapi } from '../api/swapi';

import { concatImagesToResponse } from './helpers/concat-images-to-response';
import { getFilmDetailsByName } from './helpers/get-film-details-by-name';

export const useSwapiFilms = create((set, getState) => ({
    allFilms: [],
    selectedFilm: [],
    fetchAllFilms: async () => {
        const response = await swapi().getAllFilms();
        set({ allFilms: concatImagesToResponse(response.data.results)})
    },
    fetchFilm: (filmName) => {
      set({selectedFilm: getFilmDetailsByName(filmName, getState().allFilms)})
    }
}))