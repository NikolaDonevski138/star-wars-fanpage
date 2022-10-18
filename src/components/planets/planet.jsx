import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

import sharedStyle from "../../helpers/ui/subject-in-chosen-film.module.scss";

export const Planet = ({ planetInfo }) => {
  const { name, orbital_period, population, terrain, climate, img } =
    planetInfo;

  return (
    <div className={sharedStyle.subjectItemContainer}>
      <Card variant="outlined">
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Typography level="body1" sx={{ mt: 2, mb: 1 }}>
          Name: {name}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Orbitrial Period: {orbital_period}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Population: {population}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Terrain: {terrain}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Climate: {climate}
        </Typography>
      </Card>
    </div>
  );
};
