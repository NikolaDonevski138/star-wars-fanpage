import { chosenCategoryListImages } from '../../helpers/shop/chosen-category-list-images';

export const getItemsListForChosenShopCategory = (chosenCategory) => {
  return chosenCategoryListImages[chosenCategory];
}