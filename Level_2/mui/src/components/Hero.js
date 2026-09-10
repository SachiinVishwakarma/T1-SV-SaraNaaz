import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "./Slider";
import heroTheme from "../Theme/heroTheme";
import signupbtnTheme from "../Theme/signupbtnTheme.js";

function Hero() {
  return (
    <Box
      style={heroTheme.container}
    >
      <Box style={heroTheme.content}>
        <Typography
         variant="h4"
          style={heroTheme.heading}
        >
          Launch your Web Tech practice site in minutes
        </Typography>

        <Typography
           variant="body1"
          style={heroTheme.description}
        >
          A clean, Modern Starter template with Login, Signup,
          Dashboard, Profile and Logout pages using only HTML,
          CSS, JS and browser localStorage.
        </Typography>

        <Box style={heroTheme.buttons}>
         <Button 
        style={signupbtnTheme}>
        Sign Up
       </Button>

          <Button
             variant="outlined"
            style={heroTheme.loginButton}
          >
            I already have an account
          </Button>
        </Box>
      </Box>

      <Box style={heroTheme.content}>
        <Slider />
      </Box>
    </Box>
  );
}

export default Hero;