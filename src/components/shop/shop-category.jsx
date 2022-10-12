import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import style from "./shop-category.module.scss";

export const ShopCategory = ({ shopItemCategory, image, onClick }) => {

  return (
    <div className={style.shopItemContainer} onClick={onClick}>
      <Card
        sx={{
          minHeight: "320px",
          minWidth: 420,
          mb: 3,
        }}
      >
        <CardCover>
          <img src={image} alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {shopItemCategory}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};