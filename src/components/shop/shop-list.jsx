import { useNavigate } from 'react-router-dom';
import { useSwapiShop } from '../../store/useSwapiShop';
import { ShopCategory }  from './shop-category.jsx';
// import tShirtCategoryImg
import hoodieCategoryImg from '../../assets/shop/images/hoodies/darth_vader_grey.png';
// import pendantsCategoryImg
import hatCategoryImg from '../../assets/shop/images/hats/the_darth_face.png';
// import toysCategoryImg from ''
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
      <ShopCategory key={1} shopItemCategory="T-Shirt" image={hatCategoryImg} onClick={() => onClickCategory("T-Shirt")} />
      <ShopCategory key={2} shopItemCategory="Hoodie" image={hoodieCategoryImg} onClick={() => onClickCategory("Hoodie")} />
      <ShopCategory key={3} shopItemCategory="Pendants" image={hatCategoryImg} onClick={() => onClickCategory("Pendants")} />
      <ShopCategory key={4} shopItemCategory="Hats" image ={hatCategoryImg} onClick={() => onClickCategory("Hats")} />
      <ShopCategory key={5} shopItemCategory="Toys" image={hatCategoryImg} onClick={() => onClickCategory("Toys")}/>
    </div>
  )

}