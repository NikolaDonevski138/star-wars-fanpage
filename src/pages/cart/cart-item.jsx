import style from './cart-item.module.scss';

export const CartItem = ({item}) => {
  
  const {
    image,
    orderedItems,
    price,
    sum,
  } = item;

  return (
  <div className={style.cartItemContainer}>
    <div className={style.imageContainer}>
      <img className={style.image} src={image} alt="test" />
    </div>
    <div className={style.orderedItems}>
      <p>Ordered Items</p>
      <p>{orderedItems}</p>
    </div>
    <div className={style.sumOfOneItem}>
      <p>Price of unit</p>
      <p>{price}$</p>
    </div>
    <div className={style.totalSum}>
      <p>Total Sum</p>
      <p>{sum}$</p>
    </div>
    <div className={style.buttonGroup}>
      <div className={style.removeItem}>
        <button>Remove Item</button>
      </div>
      <div className={style.removeAllItems}>
        <button>Remove all items</button>
      </div>
    </div>
  </div>
)};