import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import aboutTheme from "../Theme/aboutTheme.js";

function About() {
  const features = [
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser",  
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser",
    "Single-file pages you open directly in any modern browser", 
 ];

  return (
    <Box
      id="about"
      style={aboutTheme.container}
    >
      <Typography variant="h4" fontWeight="bold">
        About This Project
      </Typography>

      <Typography
       style={aboutTheme.description}
      >
        This comprehensive template is designed for students and
        developers to practice modern web fundamentals.
      </Typography>

      <Box
       style={aboutTheme.featuresContainer}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            style={aboutTheme.feature}
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