import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box'

import sharedStyle from '../../helpers/ui/subject-in-chosen-film.module.scss';

export const Vehicle = ({ vehicleInfo }) => {
  const {
    max_atmosphering_speed,
    cargo_capacity,
    consumables,
    manufacturer,
    name,
    passengers,
    img,
  } = vehicleInfo;

  return (
    <div className={sharedStyle.subjectItemContainer}>
      <Card className={sharedStyle.card} sx={{ pb: 3 }} variant="outlined">
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Box>
        <Typography level="body1" sx={{ mt: 2, mb: 1 }}>
          Name: {name}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Manufacturer: {manufacturer}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          This vehicle can carry: {passengers} passangers
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Maximum atmoshpering speed: {max_atmosphering_speed}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Cargo capacity: {cargo_capacity}
        </Typography>
        <Typography level="body1" sx={{ mt: 1, mb: 1 }}>
          Consumables: {consumables}
        </Typography>
        </Box>
      </Card>
    </div>
  );
};
