import { useNavigate } from 'react-router-dom';
import { useSwapiShop } from '../../store/useSwapiShop';

import style from './cart-icon.module.scss';

export const CartIcon = () => {
  const { numberOfItemsAddedToChart } = useSwapiShop((state) => ({ numberOfItemsAddedToChart: state.numberOfItemsAddedToChart }));

  const navigate = useNavigate();

    const onNavigate = () => {
        navigate('/cart')
    }

  return (
    <div className={style.cartIconContainer} onClick={onNavigate}>
      {numberOfItemsAddedToChart > 0 ? (<div>{numberOfItemsAddedToChart}</div>) : null}
      <div>
        <img className={style.cartIcon} src="assets/images/shopping_cart_icon/shopping-cart.png" alt="cart" />
      </div>
    </div>
  )
}