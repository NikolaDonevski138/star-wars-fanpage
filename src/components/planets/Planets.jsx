import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Planet } from "./planet";
import { Circles } from "react-loader-spinner";
import { LoaderWrapper } from "../../helpers/ui/loader-wrapper";

import sharedStyle from "../../helpers/ui/subject-in-chosen-film-container.module.scss";



const Planets = () => {
  const { fetchSelectedFilmPlanets, selectedFilmPlanets } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmPlanets();
  }, [fetchSelectedFilmPlanets]);

  return selectedFilmPlanets.length ? (
    <div className={sharedStyle.subjectContainer}>
      {selectedFilmPlanets.map((planet, index) => {
        return <Planet key={index} planetInfo={planet} />;
      })}
    </div>
  ) : (
    <LoaderWrapper>
      <Circles />
    </LoaderWrapper>
  );
};

export default Planets;
