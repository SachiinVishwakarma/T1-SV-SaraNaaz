import { Button,Typography, Box} from "@mui/material";
import { Link } from "react-router-dom";
import AuthButtonTheme from "../../Theme/AuthButtonTheme";
import { useTheme } from "@emotion/react";

function AuthButton({btnText, belowText, linkText, linkTo}) {
    const theme=useTheme();
   const style=AuthButtonTheme(theme);
    return(
        <Box fullWidth>
             <Button
            type="submit"
            sx={style.createButton}
          >
           {btnText}
          </Button>


          <Typography sx={style.login}>
             {belowText}{" "}

             <Link 
             to={linkTo}
             style={style.loginLink} >
             {linkText}
             </Link>

            {/* <Box
              component="a"
              href="/"
              sx={style.loginLink}
            >
              Sign in
            </Box> */}

          </Typography>

        </Box>
    )
}

export default AuthButton;