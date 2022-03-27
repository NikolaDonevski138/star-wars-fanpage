// import style from './planet.module.scss';

export const Specie = ({ specieInfo }) => {

  const {
    average_height,
    classification,
    designation,
    name,
    language,
  } = specieInfo;

  return (
    <div>
      <p>Average Heigh: {average_height} cm</p>
      <p>Classification: {classification}</p>
      <p>designation: {designation}</p>
      <p>name: {name}</p>
      <p>languague: {language}</p>
    </div>
  )
}