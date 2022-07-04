import { ShopList } from '../../components/shop/shop-list';

import style from './shop.module.scss';

const Shop = () => {
  return (
    <div className={style.shopContainer}>
      <ShopList />
    </div>
  )
}

export default Shop