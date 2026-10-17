import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import DashOverviewTheme from "../../Theme/OverviewTheme.js";
import { getLastUser } from "../../components/StorageDataSetandGet/setAndGet.js";


function DashOverview() {
  const theme = useTheme();
  const style = DashOverviewTheme (theme);

   const LastUser = getLastUser();
       
       let logedFName=LastUser[0]["First Name"];
       let logedLName=LastUser[0]["Last Name"];

  return (
    

      <Box sx={style.dashboardCard}>

        <Box sx={style.welcomeSection}>

          <Typography sx={style.welcomeHeading}>
            Welcome back, {`${logedFName} ${logedLName}`}
          </Typography>

          <Typography sx={style.description}>
            Manage your profile settings and account preferences.
            Your data is securely stored in your browser's localStorage.
          </Typography>

        </Box>


        <Box sx={style.squareCards}>

          <Box sx={style.smallCard}>

            <Typography sx={style.title}>
              Theme
            </Typography>

            <Typography sx={style.smallText}>
              Dark/Light mode persisted across all pages
            </Typography>

            <Box sx={style.markLine} />

          </Box>


          <Box sx={style.smallCard}>

            <Typography sx={style.title}>
              Authentication
            </Typography>

            <Typography sx={style.smallText}>
              Secure session stored in browser storage
            </Typography>

            <Box sx={style.markLine} />

          </Box>


          <Box sx={style.smallCard}>

            <Typography sx={style.title}>
              Profile
            </Typography>

            <Typography sx={style.smallText}>
              20% profile completed(1/5 fields)
            </Typography>

            <Box sx={style.markLine} />

          </Box>


          <Box sx={style.smallCard}>

            <Typography sx={style.title}>
              Security
            </Typography>

            <Typography sx={style.smallText}>
              Password protection and account security
            </Typography>

            <Box sx={style.markLine} />

          </Box>

        </Box>


        <Typography sx={style.quickActions}>
          Quick Actions
        </Typography>


        <Box sx={style.rectangleCards}>

          <Box sx={style.rectangleCard} component={Link} to="/Dashboard/Profile" >

            <Typography sx={style.actionTitle}>
              Edit Profile
            </Typography>

            <Typography sx={style.actionText}>
              Update your personal information
            </Typography>

          </Box>


          <Box sx={style.rectangleCard} component={Link} to="/Dashboard/security">

            <Typography sx={style.actionTitle}>
              Change Password
            </Typography>

            <Typography sx={style.actionText}>
              Update your Account security
            </Typography>

          </Box>

        </Box>

      </Box>

  );
}

export default DashOverview;