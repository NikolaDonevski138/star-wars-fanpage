import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import sharedStyle from "../../helpers/ui/subject-in-chosen-film.module.scss";

export const Specie = ({ specieInfo }) => {
  const { average_height, classification, designation, name, language, img } =
    specieInfo;

  console.log(img, "img");

  return (
    <div className={sharedStyle.subjectItemContainer}>
      <Box sx={{ minHeight: 350 }}>
        <Card variant="outlined">
          <CardOverflow>
            <AspectRatio>
              <img className={sharedStyle.img} src={img} alt="" />
            </AspectRatio>
          </CardOverflow>
          <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
            Average height: {average_height}
          </Typography>
          <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
            Classification: {classification}
          </Typography>
          <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
            Designation: {designation}
          </Typography>
          <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
            Name: {name}
          </Typography>
          <Typography level="body2" sx={{ mt: 2, mb: 2 }}>
            Languague: {language}
          </Typography>
        </Card>
      </Box>
    </div>
  );
};
