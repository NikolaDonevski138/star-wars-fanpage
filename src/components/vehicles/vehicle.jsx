import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box'

import style from './vehicle.module.scss';

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
    <div className={style.vehicleContainer}>
      <Card className={style.card} variant="outlined" sx={{ minWidth: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Name: {name}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Manufacturer: {manufacturer}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          This vehicle can carry: {passengers} passangers
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Maximum atmoshpering speed: {max_atmosphering_speed}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Cargo capacity: {cargo_capacity}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Consumables: {consumables}
        </Typography>
        </Box>
      </Card>
    </div>
  );
};
