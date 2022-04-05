import axios from 'axios';

export const swapi = {
    getAllFilms: () => axios.get('https://swapi.dev/api/films/'),
    getSubjectsBySelectedFilm: (data) => {
        const monadic = data.map((listOfApis) => axios.get(listOfApis));
        return axios.all(monadic).then(axios.spread((...responses) => {
            const mergedResponseByData = responses.map((el) => el.data);
            return mergedResponseByData
        }))
    }
}