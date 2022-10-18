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

  const { image, orderedItems, sum, productId } = item;

  return (
    <>
      <Card variant="outlined" className={style.cartItemContainer} >
        <div className={style.imageContainer}>
          <img className={style.img} src={image} alt={image} />
        </div>
        <div className={style.bodyContent}>
          <div className={style.totalItem}>
            <Typography fontSize="lg" level="body1" sx={{ mr: 1 }}>
              Total sum: ${sum}
            </Typography>
          </div>
          <div className={style.totalItem}>
            <Typography fontSize="lg" level="body1" sx={{ mr: 1 }}>
              Ordered items: {orderedItems}
            </Typography>
          </div>
        </div>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: '30%' }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              onClick={() => removeItemFromChart(productId)}
              className="hover-zoom"
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
              onClick={() => removeAllItemsForChosenCategoryFromCart(productId)}
              className="hover-zoom"
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
  );
};
