import create from 'zustand';
import { swapi } from '../api/swapi';

import { concatImagesToResponse } from './helpers/concat-images-to-response';

export const useSwapiFilms = create((set) => ({
    allFilms: 0,
    fetchAllFilms: async () => {
        const response = await swapi().getAllFilms();
        set({ allFilms: concatImagesToResponse(response.data.results) })
      }
}))