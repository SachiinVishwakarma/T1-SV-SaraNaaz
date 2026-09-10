import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import footerTheme from "../Theme/footerTheme";
import signupbtnTheme from "../Theme/signupbtnTheme.js";


function Footer() {
  // const navButtonStyle = {
  //   fontSize: "15px",
  //   border: "1px solid",
  //   borderColor: "secondary.main",
  //   borderRadius: "8px",
  //   margin: "5px 10px",
  //   padding: "11px 16px 0px 16px",
  //   textTransform: "none",
  // };

  return (
    <Box
     style={footerTheme.container}
    >
      <Typography variant="body2"style={footerTheme.text}>
        © 2025 WebTech Practice. Built for learning and growth.
      </Typography>

      <Box style={footerTheme.buttons}>
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
      </Box>
    </Box>
  );
}

export default Footer;

