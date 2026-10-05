import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import signupTheme from "../../Theme/signupTheme.js";
import { useTheme } from "@mui/material/styles";
import useSignupLogic from "./signupLogic.js";


function SignupForm({children}) {
  const theme = useTheme();
  const style = signupTheme(theme);
  const {formData, error, handleChange, handleSubmit}= useSignupLogic();

 
  return (
    <Box sx={style.container}>
      <Box sx={style.card}>

        <Typography
          variant="h2"
          sx={style.heading}
        >
          Create your account
        </Typography>

        <Typography
          variant="body1"
          sx={style.subtitle}
        >
          Sign up to access the practice dashboard.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>

          <Box sx={style.row}>

            <Box sx={style.inputGroup}>
              <Typography sx={style.label}>
                First Name:
              </Typography>

              <TextField
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!error.firstName}
              helperText={error.firstName}
              placeholder="Enter First Name"
              sx={style.input}

              />
            </Box>

            <Box sx={style.inputGroup}>
              <Typography sx={style.label}>
                Last Name:
              </Typography>

              <TextField
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!error.lastName}
                helperText={error.lastName}
                placeholder="Enter Last Name"
                sx={style.input}
              />
            </Box>

          </Box>


          

          <Box sx={style.inputGroup}>

            <Typography sx={style.label}>
              Email Address:
            </Typography>

            <TextField
             name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!error.email}
              helperText={error.email}
              type="email"
              placeholder="Enter your email address"
              sx={style.input}
            />

          </Box>


          

          <Box sx={style.row}>

            <Box sx={style.inputGroup}>

              <Typography sx={style.label}>
                Password:
              </Typography>

              <TextField
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!error.password}
                helperText={error.password}
                type="password"
                placeholder="Enter Password"
                sx={style.input}
              />

            </Box>

            <Box sx={style.inputGroup}>

              <Typography sx={style.label}>
                Confirm Password:
              </Typography>

              <TextField
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!error.confirmPassword}
                helperText={error.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                sx={style.input}
              />

            </Box>

          </Box>


          <Typography sx={style.note}>
            Use at least 8 characters, with letter & number.
          </Typography>


         

          <Box sx={style.terms}>

            <Checkbox
             sx={style.checkbox}
             name="terms"
             checked={formData.terms}
             onChange={handleChange}
             />

            <Typography sx={style.termsLabel}>
              I agree to the Terms
            </Typography>

          </Box>

     {children}

         
        </Box>

      </Box>
    </Box>
  );
}

export default SignupForm;