import { imagesForSelectedFilm } from "../../constants/images-for-selected-film";

export const getImagesForSelectedFilmSubject = (
  response,
  selectedFilm,
  selectedSubjectInFilm
) => {
  const getListOfImagesForSelectedSubjectsIntoFilms =
    imagesForSelectedFilm[selectedFilm.title.toString()][selectedSubjectInFilm];

  const findImageForSelectedSubjectIntoFilms = (nameOfSubject) => {
    const getImageForSelectedSubjectIntoFilm =
      getListOfImagesForSelectedSubjectsIntoFilms.filter(
        (el) => el[nameOfSubject.toString()]
      );
    return Object.values(getImageForSelectedSubjectIntoFilm);
  };

  const preparedResponseWithImagesForSelectedSubject = response.map((resEl) => {
    if (
      resEl.name.toString() ===
        Object.keys(findImageForSelectedSubjectIntoFilms(resEl.name)[0])[0].toString()
    ) {
      return {
        ...resEl,
        ['img']: Object.values(findImageForSelectedSubjectIntoFilms(resEl.name)[0])[0]
      };
    }
  });

  return preparedResponseWithImagesForSelectedSubject;
};
