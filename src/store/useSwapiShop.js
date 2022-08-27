import create from 'zustand';
import { getItemsListForChosenShopCategory } from './helpers/get-items-list-for-chosen-shop-category';
import { getItemsListForShopCategory } from './helpers/get-items-list-for-shop-category';

export const useSwapiShop = create((set, get) => ({
  shopCategory: "",
  itemsListForChosenShopCategory: null,
  itemsListForShopCategory: getItemsListForShopCategory(),
  numberOfItemsAddedToChart: 0,
  itemsAddedToCart: null,

  setShopCategory(shopCategory) {
    set({shopCategory: shopCategory});
  },

  getImageListForChosenShopCategory() {
    const { shopCategory } = get();
    const imageList = getItemsListForChosenShopCategory(shopCategory);
    set({itemsListForChosenShopCategory: imageList})
  },

  setIncreaseOrderItem(elementId) {
    let { itemsListForChosenShopCategory } = get();

    const selectedItemById = itemsListForChosenShopCategory.items.find((el, index) => {
      if(el.productId === elementId) {
        return el;
      }
      return false;
    });


    const modifiedItem = {
      ...selectedItemById,
      orderedItems: selectedItemById.orderedItems + 1,
      totalItems: selectedItemById.totalItems - 1,
      sum: selectedItemById.sum + selectedItemById.price
    }

    const sumOfAllItems = itemsListForChosenShopCategory.items.reduce((acc, el) => {
        return acc + el.sum
    }, 0)

    if (selectedItemById.totalItems === 0) {
        return;
    }

    const mergedItems = [...itemsListForChosenShopCategory.items.filter((el, index) => el.productId !== elementId), modifiedItem]

    const sortedItemsByProductIdAsc = mergedItems.sort((a, b) => a.productId > b.productId ? 1 : -1);

    set({ itemsListForChosenShopCategory: {
      items: sortedItemsByProductIdAsc,
      totalSumOfSameCategoryItems: sumOfAllItems
    }})

  },

  setDecreaseOrderItem(elementId) {

    let { itemsListForChosenShopCategory } = get();

    const selectedItemById = itemsListForChosenShopCategory.items.find((el, index) => {
      if(el.productId === elementId) {
        return el;
      }
      return false;
    });


    const modifiedItem = {
      ...selectedItemById,
      orderedItems: selectedItemById.orderedItems - 1,
      totalItems: selectedItemById.totalItems + 1,
      sum: selectedItemById.sum - selectedItemById.price
    }

    const sumOfAllItems = itemsListForChosenShopCategory.items.reduce((acc, el) => {
      return acc - el.sum
    }, 0)

    if (selectedItemById.orderedItems === 0) {
        return;
    }

    const mergedItems = [...itemsListForChosenShopCategory.items.filter((el, index) => el.productId !== elementId), modifiedItem]

    const sortedItemsByProductIdAsc = mergedItems.sort((a, b) => a.productId > b.productId ? 1 : -1);

    set({ itemsListForChosenShopCategory: {
      items: sortedItemsByProductIdAsc,
      totalSumOfSameCategoryItems: sumOfAllItems
    }})

  },

  addToChart() {
    const {
       itemsListForShopCategory,
       shopCategory,
       itemsListForChosenShopCategory
    } = get();

    let updatedItemsListForShopCategory = {
      ...itemsListForShopCategory,
      [shopCategory]: itemsListForChosenShopCategory
    }

    let totalItemsAddedToChart = Object.entries(updatedItemsListForShopCategory).map(el => {

      if(!!el[el.length-1]?.items === false) {
        return 0;
      }

      if(el[el.length-1]?.items) {
        return el[el.length-1]?.items.reduce((currentItem, nextItem) => {
          return currentItem.orderedItems + nextItem.orderedItems
        });
      }

      return 0;
    });

    let totalOrderToChart = totalItemsAddedToChart.reduce((previousValue, currentValue) => previousValue + currentValue);

    set({numberOfItemsAddedToChart: totalOrderToChart})
    set({itemsListForShopCategory: updatedItemsListForShopCategory })
  },

  getAllItemsAddedToChart() {
    const { itemsListForShopCategory } = get();

    let itemsAddedToCart = Object.entries(itemsListForShopCategory).map(el => {

      if(!!el[el.length-1]?.items === false) {
        return 0;
      }

      if(el[el.length-1]?.items) {
        return el[el.length-1]?.items.filter((el) => {
          return el.orderedItems > 0;
        })
      }

      return 0;
    });

    const flatten = (arr) => {
      let flattenArray = arr.reduce((acc,item) => {

        if(Array.isArray(item)) {
          acc.push(...item);
        }

        return acc;
      }, [])

      return flattenArray;
    }

    set({itemsAddedToCart: flatten(itemsAddedToCart) })
  },

  removeItemFromChart(elementId) {
    const {
      itemsAddedToCart
     } = get();

     const selectedItemById = itemsAddedToCart.find(el => el.productId === elementId);


     const modifiedItem = {
      ...selectedItemById,
      orderedItems: selectedItemById.orderedItems - 1,
      totalItems: selectedItemById.totalItems + 1,
      sum: selectedItemById.sum - selectedItemById.price
    }


    const mergedItems = [...itemsAddedToCart.filter((el, index) => el.productId !== elementId), modifiedItem]


    const sortedItemsByProductIdAsc = mergedItems.sort((a, b) => a.productId > b.productId ? 1 : -1);

    const itemsInChart = sortedItemsByProductIdAsc.map(el => {
      return el?.orderedItems;
    });

    const totalNumInChart = itemsInChart.reduce((previousValue, currentValue) => previousValue + currentValue)

    if (selectedItemById?.orderedItems === 1) {
      set({itemsAddedToCart: itemsAddedToCart.filter((el, index) => el.productId !== elementId) })
      set({numberOfItemsAddedToChart: totalNumInChart})
      return;
     }


    set({numberOfItemsAddedToChart: totalNumInChart})
    set({itemsAddedToCart: sortedItemsByProductIdAsc })
  },

  removeAllItemsForChosenCategoryFromCart(elementId) {
    const {
      itemsAddedToCart,
     } = get();


     const updatedItem = itemsAddedToCart.filter((el, index) => el.productId !== elementId);


     const itemsInChart = updatedItem.map(el => {
      return el?.orderedItems;
    });

     const totalNumInChart = itemsInChart.reduce((previousValue, currentValue) => previousValue + currentValue)

     set({numberOfItemsAddedToChart: totalNumInChart})
     set({itemsAddedToCart: updatedItem })
  }

}))