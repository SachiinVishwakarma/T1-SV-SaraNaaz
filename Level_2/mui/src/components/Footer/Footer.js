import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import footerTheme from "../../Theme/footerTheme.js";
import signupbtnTheme from "../../Theme/signupbtnTheme.js";
import { useTheme } from "@emotion/react";


function Footer() {

    const theme=useTheme();
    const style=footerTheme(theme);
     const signStyle=signupbtnTheme(theme);

  return (
    <Box
     sx={style.container}
    >
      <Typography variant="body2" sx={style.text}>
        © 2025 WebTech Practice. Built for learning and growth.
      </Typography>

      <Box sx={style.buttons}>
        <Button color="inherit" href="#about">
          About
        </Button>

        <Button color="inherit" href="#services">
          Services
        </Button>

        <Button color="inherit">
          Theme
        </Button>

        <Button color="inherit">
          Login
        </Button>

        <Button
           sx={signStyle}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;

