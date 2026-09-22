import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import signupTheme from "../../Theme/signupTheme.js";
import { useTheme } from "@mui/material/styles";

function SignupForm() {
  const theme = useTheme();
  const style = signupTheme(theme);

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

        <Box component="form">

          <Box sx={style.row}>

            <Box sx={style.inputGroup}>
              <Typography sx={style.label}>
                First Name:
              </Typography>

              <TextField
                placeholder="Enter First Name"
                sx={style.input}
              />
            </Box>

            <Box sx={style.inputGroup}>
              <Typography sx={style.label}>
                Last Name:
              </Typography>

              <TextField
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

            <Checkbox sx={style.checkbox} />

            <Typography sx={style.termsLabel}>
              I agree to the Terms
            </Typography>

          </Box>



          <Button
            type="submit"
            sx={style.createButton}
          >
            Create Account
          </Button>


          <Typography sx={style.login}>
            Already have account?{" "}

            <Box
              component="a"
              href="/"
              sx={style.loginLink}
            >
              Sign in
            </Box>

          </Typography>

        </Box>

      </Box>
    </Box>
  );
}

export default SignupForm;