import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from '@mui/joy/Box';

import style from './specie.module.scss';

export const Specie = ({ specieInfo }) => {
  const { average_height, classification, designation, name, language, img } =
    specieInfo;

  console.log(img, 'img')

  return (
    <Box sx={{ minHeight: 350 }}>
      <Card variant="outlined">
        <CardOverflow>
          <AspectRatio>
              <img className={style.img} src={img} alt="" />
          </AspectRatio>
        </CardOverflow>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {average_height}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {classification}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {designation}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {name}
        </Typography>
        <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
          {language}
        </Typography>
      </Card>
    </Box>
  );
};
