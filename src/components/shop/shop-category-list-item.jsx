import { useSwapiShop } from '../../store/useSwapiShop'

export const ShopCategoryListItem = ({ product, elementIndex }) => {

  const { setIncreaseOrderItem, setDecreaseOrderItem, addToChart } = useSwapiShop((state) => ({
    setIncreaseOrderItem: state.setIncreaseOrderItem,
    setDecreaseOrderItem: state.setDecreaseOrderItem,
    addToChart: state.addToChart
  }));

  return (
    <>
      <img src={product.image} alt={product.image} />
              <p>Price: {product.price}$</p>
              <p>Total items {product.totalItems} </p>
              <p>Ordered items: {product.orderedItems} </p>
              <p>Total price: {product.sum}$ </p>
              <button onClick={() => setIncreaseOrderItem(product.productId)}>Add item</button>
              <button onClick={() => setDecreaseOrderItem(product.productId)}>Remove Item</button>
              <button onClick={() => addToChart()}>add to chart</button>
    </>
  )
}