import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashComponentTheme from "../../Theme/DashComponentTheme.js";

function DashComponent({ children }) {
  const theme = useTheme();
  const style = DashComponentTheme(theme);

  return (
    <Box sx={style.dashboard}>

      <Box sx={style.sidebar}>

     
        <Box sx={style.userProfile}>

          <Box sx={style.logo}>
            DU
          </Box>

          <Box sx={style.head}>

            <Typography sx={style.userName}>
              Demo User
            </Typography>

            <Typography sx={style.email}>
              demo@webtech.practice
            </Typography>

          </Box>

        </Box>


        
        <Box sx={style.dashMenu}>

          <Typography sx={style.sideTitle}>
            DASHBOARD
          </Typography>

          <Box sx={style.items}>

            <Typography sx={style.selectedMenu}>
              Overview
            </Typography>

            <Typography sx={style.menuItem}>
              Profile Settings
            </Typography>

            <Typography sx={style.menuItem}>
              Security
            </Typography>

            <Typography sx={style.menuItem}>
              Notification
            </Typography>

          </Box>

        </Box>


        <Box sx={style.dashMenu}>

          <Typography sx={style.sideTitle}>
            QUICK ACTION
          </Typography>

          <Box sx={style.items}>

            <Typography sx={style.menuItem}>
              Help & Support
            </Typography>

          </Box>

        </Box>


      
        <Box sx={style.accountSection}>

          <Typography sx={style.sideTitle}>
            ACCOUNT
          </Typography>

          <Box sx={style.items}>

            <Typography sx={style.menuItem}>
              Sign out
            </Typography>

          </Box>

        </Box>

      </Box>


    
      <Box sx={style.mainContent}>

       
        <Box sx={style.topNavbar}>

          <Typography sx={style.navbarText}>
            WebTech Practice Dashboard
          </Typography>

        </Box>


        <Box sx={style.pageContent}>
          {children}
        </Box>

      </Box>

    </Box>
  );
}

export default DashComponent;