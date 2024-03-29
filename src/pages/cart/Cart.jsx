import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSwapiShop } from '../../store/useSwapiShop';
import { CartItem } from './cart-item';

import style from './cart.module.scss';
import Button from '@mui/joy/Button';

const Cart = () => {

  const navigate = useNavigate();

  const { getAllItemsAddedToChart, itemsAddedToCart } = useSwapiShop((state) => ({
    getAllItemsAddedToChart: state.getAllItemsAddedToChart,
    itemsAddedToCart: state.itemsAddedToCart
  }))

  useEffect(() => {
    getAllItemsAddedToChart()
  }, []);

  const onNavigate = () => {
    navigate('/payment');
  }


  return (
    <div className={style.cartContainer}>
      {!!itemsAddedToCart?.length ? (
        <>
          {itemsAddedToCart.map((el, index) => (
            <CartItem key={index} item={el} />
          ))}
          <Button sx={{
            fontFamily: 'roboto'
          }} onClick={() => onNavigate()}>Continue with payment</Button>
        </>
      ) : <p>No Items Added</p>}
    </div>
  )
}

export default Cart;