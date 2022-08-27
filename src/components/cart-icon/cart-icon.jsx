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
      <div>{numberOfItemsAddedToChart}</div>
      <div>Cart Icon</div>
    </div>
  )
}