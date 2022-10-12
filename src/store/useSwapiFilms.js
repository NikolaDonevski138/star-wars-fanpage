import create from "zustand";
import { swapi } from "../api/swapi";

import { concatImagesToResponse } from "./helpers/concat-images-to-response";
import { getImagesForSelectedFilmSubject } from "./helpers/get-images-for-selected-film-subject";
import { getFilmDetailsByName } from "./helpers/get-film-details-by-name";

export const useSwapiFilms = create((set, get) => ({
  allFilms: [],
  selectedFilm: null,
  selectedFilmPlanets: [],
  selectedFilmStarships: [],
  selectedFilmVehicles: [],
  selectedFilmSpecies: [],
  async fetchAllFilms() {
    const response = await swapi.getAllFilms();
    set({ allFilms: concatImagesToResponse(response.data.results) });
  },
  fetchFilm(filmName) {
    set({ selectedFilm: getFilmDetailsByName(filmName, get().allFilms) });
  },

  async fetchSelectedFilmPlanets() {
    const { selectedFilm } = get();

    const planets = await swapi.getSubjectsBySelectedFilm(selectedFilm.planets);

    set({ selectedFilmPlanets: getImagesForSelectedFilmSubject(
      concatImagesToResponse(planets),
      selectedFilm,
      "planets"
    ), });

  },

  async fetchSelectedFilmStarships() {
    const { selectedFilm } = get();

    const starships = await swapi.getSubjectsBySelectedFilm(
      selectedFilm.starships
    );

    set({ selectedFilmStarships: getImagesForSelectedFilmSubject(
      concatImagesToResponse(starships),
      selectedFilm,
      "starships"
    ), });
  },
  async fetchSelectedFilmVehicles() {
    const { selectedFilm } = get();

    const vehicles = await swapi.getSubjectsBySelectedFilm(
      selectedFilm.vehicles
    );

    set({
      selectedFilmVehicles: getImagesForSelectedFilmSubject(
        concatImagesToResponse(vehicles),
        selectedFilm,
        "vehicles"
      ),
    });
  },
  async fetchSelectedFilmSpecies() {
    const { selectedFilm } = get();
    const species = await swapi.getSubjectsBySelectedFilm(selectedFilm.species);
    set({ selectedFilmSpecies: concatImagesToResponse(species) });
  },
}));
