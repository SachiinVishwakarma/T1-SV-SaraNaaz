import { Box, Typography, TextField, Button, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginTheme from "../../Theme/LoginTheme.js";

import useLoginLogic from "./loginLogic.js";

function Login({children}) {
  const theme = useTheme();
  const style = LoginTheme(theme);
  const {formData, error, handleChange, handleSubmit}= useLoginLogic();


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



     
        <Box component="form" onSubmit={handleSubmit} sx={style.form}>

         
          <Box sx={style.field}>
            <Typography component="label" sx={style.label}>
              Email Address:
            </Typography>

            <TextField
            onChange={handleChange}
             name="email"
              value={formData.email}
              error={!!error.email}
              helperText={error.email}
              type="email"
          
              fullWidth
              // type="text"
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
            onChange={handleChange}
            name="password"
                value={formData.password}
                error={!!error.password}
                helperText={error.password}
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

         {children}
         
        
        </Box>

       
       

      </Box>
    </Box>
  );
}

export default Login;