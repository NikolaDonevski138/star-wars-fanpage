import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { FilmDetail } from "../../components/film-detail/film-detail";

import style from "./film-details.module.scss";

const FilmDetails = () => {
  const location = useLocation();

  const { fetchFilm, selectedFilm } = useSwapiFilms((state) => ({
    fetchFilm: state.fetchFilm,
    selectedFilm: state.selectedFilm,
  }));

  useEffect(() => {
    fetchFilm(location.state);
  }, [location?.state]);

  return selectedFilm ? (
    <div className={style.filmDetailsContainer}>
      <FilmDetail selectedFilm={selectedFilm} />
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default FilmDetails;
