import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Planet } from "./planet";

const Planets = () => {
  const { fetchSelectedFilmPlanets, selectedFilmPlanets } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmPlanets();
  }, [fetchSelectedFilmPlanets]);

  return selectedFilmPlanets.length ? (
    selectedFilmPlanets.map((planet, index) => {
      return <Planet key={index} planetInfo={planet} />;
    })
  ) : (
    <p>Loader</p>
  );
};

export default Planets;
