import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Planet } from "./planet";

const Planets = () => {
  const { fetchSelectedFilmPlanets, getSelectedFilmPlanets } = useSwapiFilms(
    (state) => ({
      fetchSelectedFilmPlanets: state.fetchSelectedFilmPlanets,
      getSelectedFilmPlanets: state.selectedFilmPlanets,
    })
  );

  useEffect(() => {
    fetchSelectedFilmPlanets();
  }, [fetchSelectedFilmPlanets]);

  return getSelectedFilmPlanets.length ? (
    getSelectedFilmPlanets.map((planet, index) => {
      return <Planet key={index} planetInfo={planet} />;
    })
  ) : (
    <p>Loader</p>
  );
};

export default Planets;
