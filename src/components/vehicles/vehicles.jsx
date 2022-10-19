import { useEffect } from "react";
import { useSwapiFilms } from "../../store/useSwapiFilms";
import { Vehicle } from "./vehicle";
import { LoaderWrapper } from "../../helpers/ui/loader-wrapper";

import sharedStyle from "../../helpers/ui/subject-in-chosen-film-container.module.scss";

import { Circles } from "react-loader-spinner";
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
    <LoaderWrapper>
      <Circles />
    </LoaderWrapper>
  );
};

export default Vehicles;
