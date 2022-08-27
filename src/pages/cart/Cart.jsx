import { useEffect } from 'react'
import { useSwapiShop } from '../../store/useSwapiShop';
import { CartItem } from './cart-item';

import style from './Cart.module.scss';

const Cart = () => {
  const { getAllItemsAddedToChart, itemsAddedToCart } = useSwapiShop((state) => ({
    getAllItemsAddedToChart: state.getAllItemsAddedToChart,
    itemsAddedToCart: state.itemsAddedToCart
  }))

  useEffect(() => {
    getAllItemsAddedToChart()
  }, []);

  return (
    <div className={style.cartContainer}>
      test
      {!!itemsAddedToCart?.length ? (
        itemsAddedToCart.map((el, index) => (
          <CartItem key={index} item={el} />
        ))
      ) : <p>No Items Added</p>}
    </div>
  )
}

export default Cart;