import { useEffect } from 'react';
import { useSwapiShop } from '../../store/useSwapiShop';
import { ShopCategoryListItem } from './shop-category-list-item';

export const ShopCategoryList = () => {

  const { getImageListForChosenShopCategory, itemsListForChosenShopCategory } = useSwapiShop((state) => ({
    getImageListForChosenShopCategory: state.getImageListForChosenShopCategory,
    itemsListForChosenShopCategory: state.itemsListForChosenShopCategory
  }));

  useEffect(() => {
    getImageListForChosenShopCategory()
  }, [])

  return itemsListForChosenShopCategory ? (
    <>
      {itemsListForChosenShopCategory.map((el, index) => {
        return (
          <div>
              <ShopCategoryListItem key={index} product={el}/>
          </div>
        )
      })}
    </>
  ) : <p>Please try again later</p>
}

export default ShopCategoryList;