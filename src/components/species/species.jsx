import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Specie } from "./specie";
import { Circles } from "react-loader-spinner";
import { LoaderWrapper } from "../../helpers/ui/loader-wrapper";

import sharedStyle from "../../helpers/ui/subject-in-chosen-film-container.module.scss";

const Species = () => {
  const { fetchSelectedFilmSpecies, selectedFilmSpecies } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmSpecies();
  }, [fetchSelectedFilmSpecies]);

  return selectedFilmSpecies.length ? (
    <div className={sharedStyle.subjectContainer}>
      {selectedFilmSpecies.map((specie, index) => {
        return <Specie key={index} specieInfo={specie} />;
      })}
    </div>
  ) : (
    <LoaderWrapper>
      <Circles />
    </LoaderWrapper>
  );
};

export default Species;
