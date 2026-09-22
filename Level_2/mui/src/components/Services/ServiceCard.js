import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import serviceCardTheme from "../../Theme/serviceCardTheme.js";
import { useTheme } from "@emotion/react";

function ServiceCard({ title, description }) {
  const theme=useTheme();
 const style=serviceCardTheme(theme);
  return (
    <Card
      sx={style.card}
    >
      <CardContent>
        <Typography variant="h6" sx={style.heading}>
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={style.description}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;