import { useState } from 'react';

export const ShopCategoryListItem = ({ product }) => {

  const [item, setItemValue] = useState({
    totalItems: product.totalItems,
    orderedItems: 0,
    totalSum: 0
  });

  const addItem = () => {

    if (item.totalItems === 0) {
      return;
    }

    setItemValue({
      ...item,
      orderedItems: item.orderedItems + 1,
      totalItems: item.totalItems - 1,
      totalSum: item.totalSum + product.price
    })
  }

  const removeItem = () => {

    if (item.orderedItems === 0) {
      return;
    }

    setItemValue({
      ...item,
      orderedItems: item.orderedItems - 1,
      totalItems: item.totalItems + 1,
      totalSum: item.totalSum - product.price
    })
  }

  const addToChart = () => {

  }



  return (
    <>
      <img src={product.image} alt={product.image} />
              <p>Price: {product.price}$</p>
              <p>Total items {item.totalItems} </p>
              <p>Ordered items: {item.orderedItems} </p>
              <p>Total price: {item.totalSum}$ </p>
              <button onClick={addItem}>Add item</button>
              <button onClick={removeItem}>Remove Item</button>
              <button onClick={addToChart}>add to chart</button>
    </>
  )
}