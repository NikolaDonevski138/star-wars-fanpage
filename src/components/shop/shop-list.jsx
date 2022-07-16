import { useNavigate } from 'react-router-dom';
import { useSwapiShop } from '../../store/useSwapiShop';
import { ShopCategory }  from './shop-category.jsx';
import hat from '../../assets/shop/images/hats/1.png';
import style from './shop-list.module.scss';

export const ShopList = () => {

  const navigate = useNavigate();
  const { setShopCategory } = useSwapiShop((state) => ({ setShopCategory: state.setShopCategory }));

  const onClickCategory = (categoryName) => {
    setShopCategory(categoryName);
    navigate('shop-category-list')
  }

  return (
    <div className={style.shopListContainer}>
      <ShopCategory key={1} shopItemCategory="T-Shirt" image={hat} onClick={() => onClickCategory("T-Shirt")} />
      <ShopCategory key={2} shopItemCategory="Hoodie" image={hat} onClick={() => onClickCategory("Hoodie")} />
      <ShopCategory key={3} shopItemCategory="Pendants" image={hat} onClick={() => onClickCategory("Pendants")} />
      <ShopCategory key={4} shopItemCategory="Hats" image ={hat} onClick={() => onClickCategory("Hats")} />
      <ShopCategory key={5} shopItemCategory="Toys" image={hat} onClick={() => onClickCategory("Toys")}/>
    </div>
  )

}