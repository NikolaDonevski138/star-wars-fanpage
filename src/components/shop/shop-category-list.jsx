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
      {itemsListForChosenShopCategory.items.map((el, index) => {
        return (
          <div>
              <ShopCategoryListItem key={index} product={el} elementIndex={index} />
          </div>
        )
      })}
    </>
  ) : <p>Please try again later</p>
}

export default ShopCategoryList;