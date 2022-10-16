import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Vehicle } from "./vehicle";

import sharedStyle from '../../helpers/ui/subject-in-chosen-film-container.module.scss';

const Vehicles = () => {
  const { fetchSelectedFilmVehicles, selectedFilmVehicles } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmVehicles();
  }, [fetchSelectedFilmVehicles]);

  return selectedFilmVehicles.length ? (
    <div className={sharedStyle.subjectContainer}>
      {selectedFilmVehicles.map((vehicle, index) => {
        return <Vehicle key={index} vehicleInfo={vehicle} />;
      })}
    </div>
  ) : (
    <p>Loader</p>
  );
};

export default Vehicles;
