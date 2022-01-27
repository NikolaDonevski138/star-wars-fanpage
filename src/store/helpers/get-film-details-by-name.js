export const getFilmDetailsByName = (selectedFilmName, allFilms) => {
    console.log(allFilms, 'allFilms')
    const filmDetail = allFilms.find(filmName => filmName.title === selectedFilmName);
    console.log(filmDetail, 'filmDetail')
    return filmDetail
}