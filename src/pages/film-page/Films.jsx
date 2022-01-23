import { useEffect } from 'react';
import { FilmList } from '../../components/film-list/FilmList';
import { useSwapiFilms } from '../../store/useSwapiFilms';

import style from './Films.module.scss';

const Films = () => {

  const { fetchAllFilms, allFilms } = useSwapiFilms((state) => ({fetchAllFilms: state.fetchAllFilms, allFilms: state.allFilms}));

  useEffect(() => {
    fetchAllFilms()
  }, [fetchAllFilms])


  return allFilms ? (
      <div className={style.filmContainer}>
        <FilmList allFilms={allFilms}/>
      </div>
  ): 'loading' }

export default Films