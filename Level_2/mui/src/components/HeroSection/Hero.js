import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slider from "./Slider.js";
import heroTheme from "../../Theme/heroTheme.js";
import signupbtnTheme from "../../Theme/signupbtnTheme.js";
import { useTheme } from "@emotion/react";


function Hero() {
  const theme=useTheme();
 const style=heroTheme(theme);
 const signStyle=signupbtnTheme(theme);

  return (
    <Box
      sx={style.container}
    >
      <Box sx={style.content}>
        <Typography
         variant="h4"
          sx={style.heading}
        >
          Launch your Web Tech practice site in minutes
        </Typography>

        <Typography
           variant="body1"
          sx={style.description}
        >
          A clean, Modern Starter template with Login, Signup,
          Dashboard, Profile and Logout pages using only HTML,
          CSS, JS and browser localStorage.
        </Typography>

        <Box sx={style.buttons}>
         <Button 
        sx={signStyle}>
        Sign Up
       </Button>

          <Button
             variant="outlined"
            sx={style.loginButton}
          >
            I already have an account
          </Button>
        </Box>
      </Box>

      <Box sx={style.content}>
        <Slider />
      </Box>
    </Box>
  );
}

export default Hero;