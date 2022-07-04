import create from 'zustand';

export const useSwapiShop = create((set, get) => ({
  shopCategory: "",
  imageListForChosenShopCategory: null,

  setShopCategory(shopCategory) {
    set({shopCategory: shopCategory});
  },

  getImageListForChosenShopCategory() {
    const { shopCategory } = get();
    const imageList = getBlogDetailsContentByName(shopCategory);
    set({imageListForChosenShopCategory: imageList})
  }

}))