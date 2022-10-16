// T-Shirts
import darthVaderShirt from "../../assets/shop/images/t-shirts/darth_vader.png";
import jediShirt from "../../assets/shop/images/t-shirts/jedi.png";

// Hoodies
import darthVaderGreyHoodie from "../../assets/shop/images/hoodies/darth_vader_grey.png";

// Pendants
import darthVaderPendant from "../../assets/shop/images/pendants/darth_vader.png";

// Hats
import theDarthFaceHat from "../../assets/shop/images/hats/the_darth_face.png";
import stormTrooperHat from "../../assets/shop/images/hats/stormtrooper.png";

// Toys
import jediToy from '../../assets/shop/images/toys/toys.png'

export const chosenCategoryListImages = {
  "T-Shirt": {
    items: [
      {
        productId: 1,
        price: 20,
        image: darthVaderShirt,
        totalItems: 7,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
      {
        productId: 2,
        price: 20,
        image: jediShirt,
        totalItems: 7,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
    ],
    totalSumOfSameCategoryItems: 0,
  },
  Hoodie: {
    items: [
      {
        productId: 3,
        price: 30,
        image: darthVaderGreyHoodie,
        totalItems: 7,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
    ],
    totalSumOfSameCategoryItems: 0,
  },
  Pendants: {
    items: [
      {
        productId: 4,
        price: 7,
        image: darthVaderPendant,
        totalItems: 7,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
    ],
    totalSumOfSameCategoryItems: 0,
  },
  Hats: {
    items: [
      {
        productId: 5,
        price: 15,
        image: theDarthFaceHat,
        totalItems: 13,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
      {
        productId: 6,
        price: 15,
        image: stormTrooperHat,
        totalItems: 9,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
    ],
    totalSumOfSameCategoryItems: 0,
  },
  Toys: {
    items: [
      {
        productId: 7,
        price: 7,
        image: jediToy,
        totalItems: 13,
        size: null,
        orderedItems: 0,
        sum: 0,
      },
    ],
    totalSumOfSameCategoryItems: 0,
  },
};
