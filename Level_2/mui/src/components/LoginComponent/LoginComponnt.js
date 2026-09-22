import { Box, Typography, TextField, Button, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginTheme from "../../Theme/LoginTheme.js";

function Login() {
  const theme = useTheme();
  const style = LoginTheme(theme);

  return (
    <Box sx={style.page}>
      <Box sx={style.card}>

       
        <Box sx={style.heading}>
          <Typography sx={style.headingText}>
            Welcome Back
          </Typography>

          <Typography sx={style.subtitle}>
            Sign in to continue to your dashboard
          </Typography>
        </Box>

     
        <Box component="form" sx={style.form}>

         
          <Box sx={style.field}>
            <Typography component="label" sx={style.label}>
              Email Address:
            </Typography>

            <TextField
              fullWidth
              type="text"
              placeholder="Enter your email address"
              variant="outlined"
              sx={style.input}
            />
          </Box>

          
          <Box sx={style.field}>
            <Typography component="label" sx={style.label}>
              Password:
            </Typography>

            <TextField
              fullWidth
              type="password"
              placeholder="Enter password"
              variant="outlined"
              sx={style.input}
            />
          </Box>

        
          <Typography sx={style.hint}>
            Password must be atleast 8 characters long.
          </Typography>

          <Box sx={style.checkRow}>
            <Box sx={style.remember}>
              <Checkbox
                size="small"
                sx={style.checkbox}
              />

              <Typography sx={style.rememberText}>
                Remember me for 30 days
              </Typography>
            </Box>

            <Typography sx={style.link}>
              Forgot password?
            </Typography>
          </Box>

         
          <Button
            type="submit"
            fullWidth
            sx={style.button}
          >
            Sign in
          </Button>
        </Box>

       
        <Box sx={style.createAccount}>
          <Typography component="span" sx={style.smallText}>
            New to WebTech Practice?{" "}
          </Typography>

          <Typography component="span" sx={style.link}>
            Create an account
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}

export default Login;