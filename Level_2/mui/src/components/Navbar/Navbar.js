import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import navbarTheme from "../../Theme/navbarTheme.js";
import signupbtnTheme from "../../Theme/signupbtnTheme.js";
import { useTheme } from "@emotion/react";

function Navbar() {
  const theme=useTheme();
 const style=navbarTheme(theme);

 const signStyle=signupbtnTheme(theme);

  return (
    <AppBar
      position="static"
       sx={style.appBar}
    >
      <Toolbar
        sx={style.toolbar}
      >

        <Typography
          variant="h6"
           sx={style.title}
        >
          WebTech Practice
        </Typography>

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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;