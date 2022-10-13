import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Specie } from "./specie";

import style from './species.module.scss';

const Species = () => {
  const { fetchSelectedFilmSpecies, selectedFilmSpecies } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmSpecies();
  }, [fetchSelectedFilmSpecies]);

  return selectedFilmSpecies.length ? (
    <div className={style.speciesContainer}>
      {selectedFilmSpecies.map((specie, index) => {
        return <Specie key={index} specieInfo={specie} />;
      })}
    </div>
  ) : (
    <p>Loader</p>
  );
};

export default Species;
