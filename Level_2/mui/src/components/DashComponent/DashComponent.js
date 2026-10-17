import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import DashComponentTheme from "../../Theme/DashComponentTheme.js";
import { getLastUser } from "../StorageDataSetandGet/setAndGet.js";
import { useNavigate } from "react-router-dom";

function DashComponent({ children }) {
  const theme = useTheme();
  const style = DashComponentTheme(theme);
  const navigate = useNavigate();

    const LastUser = getLastUser();
    let logedEmail=LastUser[0]["Email Address"];
    let logedFName=LastUser[0]["First Name"];
    let logedLName=LastUser[0]["Last Name"];

    let logoLetters=`${logedFName[0]}${logedLName[0]}`.toUpperCase();

   const handleSignOut = () => {
  const lastUser = JSON.parse(localStorage.getItem("lastUser")) || [];
  lastUser.pop();
  localStorage.setItem("lastUser", JSON.stringify(lastUser));
  navigate("/login");

};




  return (  
    <Box sx={style.dashboard}>

      <Box sx={style.sidebar}>

     
        <Box sx={style.userProfile}>

          <Box sx={style.logo}>
            {logoLetters}
          </Box>

          <Box sx={style.head}>

            <Typography sx={style.userName}>
              {`${logedFName} ${logedLName}`}
            </Typography>

            <Typography sx={style.email}>
              {logedEmail}
            </Typography>

          </Box>

        </Box>


        
        <Box sx={style.dashMenu}>

          <Typography sx={style.sideTitle}>
            DASHBOARD
          </Typography>


          <Box sx={style.items}>

            <NavLink to="/DashBoard/Overview" style={style.menu}>

            {({isActive})=>(

            <Typography sx={isActive? style.selectedMenu:style.menuItem}>
              Overview
            </Typography>

            )}    

            </NavLink>

            <NavLink to="/DashBoard/Profile" style={style.menu}>
    {({ isActive }) => (
      <Typography sx={isActive ? style.selectedMenu : style.menuItem}>
        Profile Settings
      </Typography>
    )}
  </NavLink>

  <NavLink to="/DashBoard/Security" style={style.menu}>
    {({ isActive }) => (
      <Typography sx={isActive ? style.selectedMenu : style.menuItem}>
        Security
      </Typography>
    )}
  </NavLink>

  <NavLink to="/DashBoard/Notification" style={style.menu}>
    {({ isActive }) => (
      <Typography sx={isActive ? style.selectedMenu : style.menuItem}>
        Notification
      </Typography>
    )}
  </NavLink>

          </Box>

        </Box>


        <Box sx={style.dashMenu}>

          <Typography sx={style.sideTitle}>
            QUICK ACTION
          </Typography>

          <Box sx={style.items}>

          <NavLink to="/DashBoard/Help&Support" style={style.menu}>
  {({ isActive }) => (
    <Typography sx={isActive ? style.selectedMenu : style.menuItem}>
      Help & Support
    </Typography>
  )}
</NavLink>

          </Box>

        </Box>


      
        <Box sx={style.accountSection}>

          <Typography sx={style.sideTitle}>
            ACCOUNT
          </Typography>

          <Box sx={style.items}>

            <Typography sx={style.menuItem} onClick={handleSignOut}>
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