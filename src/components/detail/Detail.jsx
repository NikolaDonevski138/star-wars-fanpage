import { useState } from 'react';

import style from './Detail.module.scss';
import { Planets } from '../planets/Planets';
import { Starships } from '../starships/starships';
import { Vehicles } from '../vehicles/vehicles';
import { Species } from '../species/species';

export const Detail = ({ selectedFilm }) => {

  const [isOpenedFilmDescription, setOpenFilmDescription] = useState(false);
  const [isOpenedFilmPlanets, setOpenFilmPlanets] = useState(false);
  const [isOpenedFilmVehicles, setOpenFilmVehicles] = useState(false);
  const [isOpenedFilmStarships, setOpenFilmStarships] = useState(false);
  const [isOpenedFilmSpecies, setOpenFilmSpecies] = useState(false);

  const { img, title, opening_crawl } = selectedFilm;
  return (
    <div className={style.detailItemContainer}>

            {isOpenedFilmDescription ? (
               <div className={style.detailInfo}>
               <h1>{title} : {opening_crawl}</h1>
               <p onClick={() => setOpenFilmDescription(!isOpenedFilmDescription)}>Hide Film Description</p>
             </div>

            ) : (
              <div className={style.detailInfo}>
              <p onClick={() => setOpenFilmDescription(!isOpenedFilmDescription)}>Show film description</p>
            </div>
            )}

            {isOpenedFilmPlanets ? (
                            <div onClick={() => setOpenFilmPlanets(!isOpenedFilmPlanets)} className={style.detailInfo}>
                            <Planets />
                            </div>
            ) : (
              <div className={style.detailInfo}>
                <p onClick={() => setOpenFilmPlanets(!isOpenedFilmPlanets)}>Explore planets in: {title}</p>
              </div>
            )}

            {isOpenedFilmStarships ? (
                          <div onClick={() => setOpenFilmStarships(!isOpenedFilmStarships)} className={style.detailInfo}>
                          <Starships />
                          </div>

            ) : (
              <div className={style.detailInfo}>
                <p onClick={() => setOpenFilmStarships(!isOpenedFilmStarships)}>Explore Starships in: {title}</p>
              </div>
            )}


            {isOpenedFilmVehicles ? (
                           <div onClick={() => setOpenFilmVehicles(!isOpenedFilmVehicles)} className={style.detailInfo}>
                            <Vehicles />
                           </div>

            ) : (
              <div className={style.detailInfo}>
              <p onClick={() => setOpenFilmVehicles(!isOpenedFilmVehicles)}>Explore vehicles in: {title}</p>
            </div>
            )}

            {isOpenedFilmSpecies ? (
                           <div onClick={() => setOpenFilmSpecies(!isOpenedFilmSpecies)} className={style.detailInfo}>
                            <Species />
                           </div>

            ) : (
              <div className={style.detailInfo}>
              <p onClick={() => setOpenFilmSpecies(!isOpenedFilmSpecies)}>Explore species in: {title}</p>
            </div>
            )}


            <div className={style.detailImageContainer}>
                <img className={style.detailImage} src={img} alt='img' />
            </div>
    </div>
  )
}