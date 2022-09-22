// hoodies
import darthVaderGreyHoodie from '../../assets/shop/images/hoodies/darth_vader_grey.png'


// hats
import theDarthFaceHat from '../../assets/shop/images/hats/the_darth_face.png';
import stormTrooperHat from '../../assets/shop/images/hats/stormtrooper.png';

export const chosenCategoryListImages = {
  Hoodie: {
    items: [
      {
        productId: 1,
        price: 30,
        image: darthVaderGreyHoodie,
        totalItems: 7,
        size: null,
        orderedItems: 0,
        sum: 0
      },
    ],
    totalSumOfSameCategoryItems: 0
  },
  Pendants: [],
  Hats: {
    items: [
      {
        productId: 2,
        price: 15,
        image: theDarthFaceHat,
        totalItems: 13,
        size: null,
        orderedItems: 0,
        sum: 0
      },
      {
        productId: 3,
        price: 15,
        image: stormTrooperHat,
        totalItems: 9,
        size: null,
        orderedItems: 0,
        sum: 0
      }],
    totalSumOfSameCategoryItems: 0
  },
  Toys: []
};