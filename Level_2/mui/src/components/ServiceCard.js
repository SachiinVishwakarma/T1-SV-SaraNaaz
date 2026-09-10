import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import serviceCardTheme from "../Theme/serviceCardTheme.js";

function ServiceCard({ title, description }) {
  return (
    <Card
      style={serviceCardTheme.card}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>

        <Typography
          variant="body2"
          style={serviceCardTheme.description}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;