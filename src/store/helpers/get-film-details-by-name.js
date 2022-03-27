export const getFilmDetailsByName = (selectedFilmName, allFilms) => {
    const filmDetail = allFilms.find(filmName => filmName.title === selectedFilmName);
    return filmDetail
}