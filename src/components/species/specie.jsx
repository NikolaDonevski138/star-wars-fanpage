import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export const Specie = ({ specieInfo }) => {

  const {
    average_height,
    classification,
    designation,
    name,
    language,
    img
  } = specieInfo;

  console.log('img', img)

  return (
    <>
    <Card variant="outlined" sx={{ minWidth: 320 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
          <img src={img} alt="" />
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
      
      </>
    // <div>
    //   <p>Average Heigh: {average_height} cm</p>
    //   <p>Classification: {classification}</p>
    //   <p>designation: {designation}</p>
    //   <p>name: {name}</p>
    //   <p>languague: {language}</p>
    // </div>
  )
}