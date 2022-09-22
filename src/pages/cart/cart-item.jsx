import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import { useSwapiShop } from "../../store/useSwapiShop";

import style from "./cart-item.module.scss";

export const CartItem = ({ item }) => {
  const { removeItemFromChart, removeAllItemsForChosenCategoryFromCart } =
    useSwapiShop((state) => ({
      removeItemFromChart: state.removeItemFromChart,
      removeAllItemsForChosenCategoryFromCart:
        state.removeAllItemsForChosenCategoryFromCart,
    }));

  const { image, orderedItems, price, sum, productId } = item;

  return (
    <>
      <Card variant="outlined" className={style.cartItemContainer}>
        <Box sx={{width: 70, height: 70}}>
          <img className={style.img} src={image} alt={image} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <div className={style.totalItem}>
            <Typography fontSize="lg" level="body3" sx={{ mr: 1 }}>
              total sum:
            </Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${sum}
            </Typography>
          </div>
          <div className={style.totalItem}>
            <Typography fontSize="lg" level="body3" sx={{ mr: 1 }}>
              Ordered items:
            </Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {orderedItems}
            </Typography>
          </div>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: '30%' }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              onClick={() => removeItemFromChart(productId)}
              alt="remove"
              src="/assets/images/minus/minus.png"
              size="sm"
              sx={{
                mr: 4,
                cursor: 'pointer'
              }}
            />
          </Box>
          <Box>
            <Avatar
              nClick={() => removeAllItemsForChosenCategoryFromCart(productId)}
              alt="add to chart"
              src="/assets/images/remove/remove.png"
              size="sm"
              sx={{
                cursor: 'pointer'
              }}
            />
          </Box>
        </Box>
      </Card>
    </>
    // <div className={style.cartItemContainer}>
    //   <div className={style.imageContainer}>
    //     <img className={style.image} src={image} alt="test" />
    //   </div>
    //   <div className={style.orderedItems}>
    //     <p>Ordered Items</p>
    //     <p>{orderedItems}</p>
    //   </div>
    //   <div className={style.sumOfOneItem}>
    //     <p>Price of unit</p>
    //     <p>{price}$</p>
    //   </div>
    //   <div className={style.totalSum}>
    //     <p>Total Sum</p>
    //     <p>{sum}$</p>
    //   </div>
    //   <div className={style.buttonGroup}>
    //     <div className={style.removeItem}>
    //       <button onClick={() => removeItemFromChart(productId)}>Remove Item</button>
    //     </div>
    //     <div className={style.removeAllItems}>
    //       <button onClick={() => removeAllItemsForChosenCategoryFromCart(productId)}>Remove all items</button>
    //     </div>
    //   </div>
    // </div>
  );
};
