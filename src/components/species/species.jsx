import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Specie } from "./specie";

const Species = () => {
  const {
    fetchSelectedFilmSpecies,
    getSelectedFilmSpecies,
  } = useSwapiFilms((state) => ({
    fetchSelectedFilmSpecies: state.fetchSelectedFilmSpecies,
    getSelectedFilmSpecies: state.selectedFilmSpecies,
  }));


  useEffect(() => {
    fetchSelectedFilmSpecies();
  }, [
    fetchSelectedFilmSpecies,
  ]);

  return getSelectedFilmSpecies.length ? (
    getSelectedFilmSpecies.map((specie, index) => {
      return <Specie key={index} specieInfo={specie} />;
    })
  ) : (
    <p>Loader</p>
  );
};

export default Species;
