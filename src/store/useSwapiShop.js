import create from 'zustand';
import { getItemsListForChosenShopCategory } from './helpers/get-items-list-for-chosen-shop-category';

export const useSwapiShop = create((set, get) => ({
  shopCategory: "",
  itemsListForChosenShopCategory: null,

  setShopCategory(shopCategory) {
    set({shopCategory: shopCategory});
  },

  getImageListForChosenShopCategory() {
    const { shopCategory } = get();
    const imageList = getItemsListForChosenShopCategory(shopCategory);
    set({itemsListForChosenShopCategory: imageList})
  }

}))