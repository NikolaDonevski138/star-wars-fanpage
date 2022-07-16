import style from './shop-category.module.scss';

export const ShopCategory = ({ shopItemCategory, image, onClick }) => {
  return (
    <div className={style.shopItemContainer} onClick={onClick}>
      <div className={style.imgContainer}>
        <img className={style.imgContainer} src={image} alt={image} />
      </div>
        <p style={{color: 'white'}}>{shopItemCategory}</p>
    </div>
  )
}
