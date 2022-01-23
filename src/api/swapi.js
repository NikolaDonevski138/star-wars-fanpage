import axios from 'axios';

export const swapi = () => {
    return {
        getAllFilms: () => axios.get('https://swapi.dev/api/films/')
    }
}