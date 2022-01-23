import style from './Film.module.scss';

export const Film = ({film}) => {
    return (
       <div className={style.filmItemContainer}>
           <div className={style.filmInfo}>
               <h1>Star Wars: {film.title}</h1>
               <p>Films</p>
           </div>
           <div className={style.filmImageContainer}>
               <img className={style.filmImage} src={film.img} alt='img' />
           </div>
       </div>
    );  
}