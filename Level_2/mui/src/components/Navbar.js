import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import navbarTheme from "../Theme/navbarTheme.js";
import signupbtnTheme from "../Theme/signupbtnTheme.js";

function Navbar() {
  return (
    <AppBar
      position="static"
       style={navbarTheme.appBar}
    >
      <Toolbar
        style={navbarTheme.toolbar}
      >

        <Typography
          variant="h4"
           style={navbarTheme.title}
        >
          WebTech Practice
        </Typography>

        <Button color="inherit">
          About
        </Button>

        <Button color="inherit">
          Services
        </Button>

        <Button color="inherit">
          Theme
        </Button>

        <Button color="inherit">
          Login
        </Button>

        <Button 
        style={signupbtnTheme}>
        Sign Up
       </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;