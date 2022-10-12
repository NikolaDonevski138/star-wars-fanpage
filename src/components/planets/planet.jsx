import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export const Planet = ({ planetInfo }) => {
  const { name, orbital_period, population, terrain, climate, img } =
    planetInfo;

  return (
    <Card variant="outlined" sx={{ minWidth: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={img} alt="" />
        </AspectRatio>
      </CardOverflow>
      <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
        Name:{name}
      </Typography>
      <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
        Orbitrial Period:{orbital_period}
      </Typography>
      <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
        Population:{population}
      </Typography>
      <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
        Terrain:{terrain}
      </Typography>
      <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
        Climate:{climate}
      </Typography>
    </Card>
  );
};
