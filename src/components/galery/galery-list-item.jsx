import style from './galery-list-item.module.scss';

export const GaleryListItem = ({ image }) => {
  return (
    <div className={style.galeryListItemContainer}>
      <img className={style.img} src={image} alt={image} />
    </div>
  )
}