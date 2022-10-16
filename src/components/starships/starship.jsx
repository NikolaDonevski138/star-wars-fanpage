import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box'

import sharedStyle from '../../helpers/ui/subject-in-chosen-film.module.scss';

export const Starship = ({ starshipInfo }) => {

  const {
    MGLT,
    cargo_capacity,
    consumables,
    manufacturer,
    name,
    passengers,
    starship_class,
    img
  } = starshipInfo;

  return (
    <div className={sharedStyle.subjectItemContainer}>
      <Card className={sharedStyle.card} variant="outlined" sx={{ minWidth: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          MGLT: {MGLT}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Cargo capacity {cargo_capacity}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          manufacturer: {manufacturer} passangers
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          name: {name}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          consumables: {consumables}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Starship Class: {starship_class}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          Passengers: {passengers}
        </Typography>
        </Box>
      </Card>
    </div>
  )
}