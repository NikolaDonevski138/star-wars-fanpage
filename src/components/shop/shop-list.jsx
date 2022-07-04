import { ShopCategory } from './shop-category.jsx';

import hat from '../../assets/shop/images/hats/1.png';

import style from './shop-list.module.scss';

export const ShopList = () => {

  return (
    <div className={style.shopListContainer}>
      <ShopCategory shopItemCategory="T-Shirt" image={hat} />
      <ShopCategory shopItemCategory="Hoodie" image={hat} />
      <ShopCategory shopItemCategory="Pendants" image={hat} />
      <ShopCategory shopItemCategory="Hats" image ={hat} />
      <ShopCategory shopItemCategory="Toys" image={hat} />
    </div>
  )

}