import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Starship } from "./starship";

import sharedStyle from '../../helpers/ui/subject-in-chosen-film-container.module.scss';

const Starships = () => {
  const { fetchSelectedFilmStarships, selectedFilmStarships } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmStarships();
  }, [fetchSelectedFilmStarships]);


  return selectedFilmStarships.length ? (
    <div className={sharedStyle.subjectContainer}>
      {selectedFilmStarships.map((starship, index) => {
        return <Starship key={index} starshipInfo={starship} />;
      })}
    </div>
  ) : (
    <p>Loader</p>
  );
};

export default Starships;
