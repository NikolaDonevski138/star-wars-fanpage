// import style from './planet.module.scss';

export const Vehicle = ({ vehicleInfo }) => {

  const {
    max_atmosphering_speed,
    cargo_capacity,
    consumables,
    manufacturer,
    name,
    passengers
  } = vehicleInfo;

  return (
    <div>
      <p>Maximum Speed: {max_atmosphering_speed} </p>
      <p>Cargo Capacity: {cargo_capacity} </p>
      <p>consumables: {consumables}</p>
      <p>manufacturer: {manufacturer}</p>
      <p>Name: {name}</p>
      <p>Passangers: {passengers}</p>
    </div>
  )
}