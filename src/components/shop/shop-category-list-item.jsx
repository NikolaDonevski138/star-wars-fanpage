import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import { useSwapiShop } from "../../store/useSwapiShop";

export const ShopCategoryListItem = ({ product, elementIndex }) => {
  const { setIncreaseOrderItem, setDecreaseOrderItem, addToChart } =
    useSwapiShop((state) => ({
      setIncreaseOrderItem: state.setIncreaseOrderItem,
      setDecreaseOrderItem: state.setDecreaseOrderItem,
      addToChart: state.addToChart,
    }));

  return (
    <>
      <Card variant="outlined" sx={{ width: "450px", mx: 3, my: 3 }}>
        <AspectRatio minHeight="400px" maxHeight="350px" sx={{ my: 2 }}>
          <img src={product.image} alt={product.image} />
        </AspectRatio>
        <Box sx={{ display: "flex" }}>
          <div style={{ marginRight: 15 }}>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${product.price}
            </Typography>
          </div>
          <div style={{ marginRight: 15 }}>
            <Typography level="body3">Total items:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {product.totalItems}
            </Typography>
          </div>
          <div>
            <Typography level="body3">Ordered items:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {product.orderedItems}
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Avatar
              onClick={() => setIncreaseOrderItem(product.productId)}
              alt="add"
              className="hover-zoom"
              src="/assets/images/plus/plus.png"
              size="sm"
              sx={{
                cursor: 'pointer'
              }}
            />
            <Avatar
              onClick={() => setDecreaseOrderItem(product.productId)}
              alt="remove"
              className="hover-zoom"
              src="/assets/images/minus/minus.png"
              size="sm"
              sx={{
                ml: 2,
                cursor: 'pointer'
              }}
            />
          </Box>
          <Box>
            <Avatar
              onClick={() => addToChart()}
              className="hover-zoom"
              alt="add to chart"
              src="/assets/images/shopping_cart_icon/shopping-cart.png"
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
