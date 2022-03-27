import style from './planet.module.scss';

export const Planet = ({ planetInfo }) => {

  const {
    name,
    orbital_period,
    population,
    terrain,
    climate
  } = planetInfo;

  return (
    <div className={style.planetContainer}>
      <p>Name: {name}</p>
      <p>Orbitrial Period: {orbital_period} days</p>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
      <p>Climate: {climate}</p>
    </div>
  )
}