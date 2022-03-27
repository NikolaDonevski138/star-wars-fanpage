// import style from './planet.module.scss';

export const Starship = ({ starshipInfo }) => {

  const {
    MGLT,
    cargo_capacity,
    consumables,
    manufacturer,
    name,
    passengers,
    starship_class
  } = starshipInfo;

  return (
    <div>
      <p>MGLT: {MGLT} </p>
      <p>Cargo Capacity: {cargo_capacity} </p>
      <p>consumables: {consumables}</p>
      <p>manufacturer: {manufacturer}</p>
      <p>Name: {name}</p>
      <p>Passangers: {passengers}</p>
      <p>Starship Class: {starship_class}</p>
    </div>
  )
}