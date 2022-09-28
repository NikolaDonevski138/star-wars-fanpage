import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Vehicle } from "./vehicle";

import style from "./vehicles.module.scss";

const Vehicles = () => {
  const { fetchSelectedFilmVehicles, selectedFilmVehicles } = useSwapiFilms();

  useEffect(() => {
    fetchSelectedFilmVehicles();
  }, [fetchSelectedFilmVehicles]);

  return selectedFilmVehicles.length ? (
    <div className={style.vehiclesContainer}>
      {selectedFilmVehicles.map((vehicle, index) => {
        return <Vehicle key={index} vehicleInfo={vehicle} />;
      })}
    </div>
  ) : (
    <p>Loader</p>
  );
};

export default Vehicles;
