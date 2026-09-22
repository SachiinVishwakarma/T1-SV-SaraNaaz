import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import aboutTheme from "../../Theme/aboutTheme.js";
import { useTheme } from "@emotion/react";

function About() {
  const features = [
    "Single-file pages you open directly i  n any modern browser",
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser",  
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser", 
 ];

 const theme=useTheme();
 const style=aboutTheme(theme);

  return (
    <Box
      id="about"
      sx={style.container}
    >
      <Typography variant="h4" sx={style.head}>
        About This Project
      </Typography>

      <Typography
       sx={style.description}
      >
        This comprehensive template is designed for students and
        developers to practice modern web fundamentals.
      </Typography>

      <Box
       sx={style.featuresContainer}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={style.feature}
          >
            <Typography variant="body2">
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default About;