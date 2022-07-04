import style from './shop-item.module.scss';

export const ShopCategory = ({ shopItemCategory, image }) => {
  return (
    <div className={style.shopItemContainer}>
      <div className={style.imgContainer}>
        <img className={style.imgContainer} src={image} alt={image} />
      </div>
        <p>{shopItemCategory}</p>
    </div>
  )
}