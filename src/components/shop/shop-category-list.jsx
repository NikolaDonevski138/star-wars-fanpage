import { useEffect } from "react";
import { useSwapiShop } from "../../store/useSwapiShop";
import { ShopCategoryListItem } from "./shop-category-list-item";

import style from "./shop-category-list.module.scss";

export const ShopCategoryList = () => {
  const { getImageListForChosenShopCategory, itemsListForChosenShopCategory } =
    useSwapiShop((state) => ({
      getImageListForChosenShopCategory:
        state.getImageListForChosenShopCategory,
      itemsListForChosenShopCategory: state.itemsListForChosenShopCategory,
    }));

  useEffect(() => {
    getImageListForChosenShopCategory();
  }, []);

  return itemsListForChosenShopCategory ? (
    <div className={style.shopCategoryListContainer}>
      {itemsListForChosenShopCategory.items.map((el, index) => {
        return (
          <ShopCategoryListItem key={index} product={el} elementIndex={index} />
        );
      })}
    </div>
  ) : (
    <p>Please try again later</p>
  );
};

export default ShopCategoryList;
