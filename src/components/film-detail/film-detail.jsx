import { useNavigate } from "react-router-dom";

import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

import style from "./film-detail.module.scss";

export const FilmDetail = ({ selectedFilm }) => {
  const navigate = useNavigate();

  const { img, title, opening_crawl } = selectedFilm;
  return (
    <div className={style.filmDetailContainer}>
      <Card variant="outlined" sx={{ minWidth: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
          {title}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {opening_crawl}
        </Typography>
        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
          Explore:
        </Typography>
        <div className={style.imagesContainer}>
          <img
            onClick={() => navigate("planets", { state: selectedFilm?.title })}
            className="hover-zoom"
            style={{ marginRight: "15px" }}
            src="/assets/images/planet/planet.png"
            alt="planet"
          />
          <img
            onClick={() => navigate("starships", { state: selectedFilm?.title })}
            className="hover-zoom"
            style={{ marginRight: "15px" }}
            src="/assets/images/rocket/rocket.png"
            alt="starships"
          />
          <img
            onClick={() => navigate("vehicles", { state: selectedFilm?.title })}
            className="hover-zoom"
            style={{ marginRight: "15px" }}
            src="/assets/images/vehicle/vehicle.png"
            alt="vehicle"
          />
          <img
            onClick={() => navigate("species", { state: selectedFilm?.title })}
            className="hover-zoom"
            src="/assets/images/species/species.png"
            alt="species"
          />
        </div>
      </Card>
    </div>
  );
};
