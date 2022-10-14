import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import style from "./film.module.scss";
import { useNavigate } from "react-router-dom";

export const Film = ({ film }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/filmdetails", { state: film?.title });
  };

  return (
    <Card
      onClick={() => onNavigate()}
      sx={{
        minHeight: "320px",
        minWidth: 420,
        mb: 3,
        cursor: 'pointer'
      }}
    >
      <CardCover>
        <img className={style.img} src={film.img} alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h2" fontSize="lg" textColor="neutral.300" mb={1}>
          {film.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
