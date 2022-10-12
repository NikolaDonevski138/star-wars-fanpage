import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Starship } from "./starship";

import style from './starships.module.scss';

const Starships = () => {
  const { fetchSelectedFilmStarships, selectedFilmStarships } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmStarships();
  }, [fetchSelectedFilmStarships]);

  console.log(selectedFilmStarships, 'jeuuuu')

  return selectedFilmStarships.length ? (
    <div className={style.starshipsContainer}>
      {selectedFilmStarships.map((starship, index) => {
        return <Starship key={index} starshipInfo={starship} />;
      })}
    </div>
  ) : (
    <p>Loader</p>
  );
};

export default Starships;
