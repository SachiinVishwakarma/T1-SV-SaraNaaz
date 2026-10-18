import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SecurityComponntTheme from "../../Theme/SecurityTheme.js";
import InputBox from "../../components/AuthAndInputComponent/InputBox.js";
import calendarIcon from "../../components/Assets/icon.png";
import validateSecurity from "./securityLogic.js";
import { getLastUser } from "../../components/StorageDataSetandGet/setAndGet.js";
import { getUser } from "../../components/StorageDataSetandGet/setAndGet.js";



function SecurityComponnt() {
  const theme = useTheme();
  const style = SecurityComponntTheme(theme);

//fetching local data
   const LastUser = getLastUser();
   let userDetails= getUser();
       
       let logedPassword=LastUser[0]["Password"];

       let indexNo = LastUser[0]["Index No"];


  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [errors, setErrors] = useState({});

  const formData = {
  currentPassword,
  newPassword,
  confirmPassword,
};

//added from profile
  const handleUpdatePassword = () => {
  const validationErrors = validateSecurity(formData, logedPassword);

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    let updatedDate=new Date().toLocaleString();

    userDetails[indexNo]["Password"]=newPassword;
    userDetails[indexNo]["Last Updated"]=updatedDate;
            

    LastUser[0]["Password"]=newPassword
    LastUser[0]["Last Updated"]=updatedDate;

    localStorage.setItem("userDetails",JSON.stringify(userDetails));
    localStorage.setItem("lastUser",JSON.stringify(LastUser));

    alert("security saved successfully!");
  }
};

  const handleClear = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

 

  return (
    <Box sx={style.securityCard}>
      <Typography sx={style.securityTitle}>
        Security Settings
      </Typography>

      <Typography sx={style.sectionTitle}>
        Security Settings
      </Typography>

      <Typography sx={style.description}>
        Keep your account secure by using a strong password and changing it
        regularly.
      </Typography>

      <Box sx={style.inputRow}>
        <InputBox
          label="Current Password"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          size="medium"
          type="password"
          placeholder="Enter current password"
          error={Boolean(errors.currentPassword)}
          helperText={errors.currentPassword}
        />

        <InputBox
          label="New Password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          size="medium"
          type="password"
          placeholder="Minimum 8 characters"
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword}
        />
      </Box>

      <Box sx={style.confirmInput}>
        <InputBox
          label="Confirm New Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          size="medium"
          type="password"
          placeholder="Re-enter new password"
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
        />
      </Box>

      <Box sx={style.buttons}>
        <Button sx={style.clearButton} onClick={handleClear}>
          Clear
        </Button>

        <Button
          sx={style.updateButton}
          onClick={handleUpdatePassword}
        >
          Update Password
        </Button>
      </Box>

      <Box sx={style.divider} />

      <Typography sx={style.informationTitle}>
        Security Information
      </Typography>

      <Box sx={style.infoRow}>
        <Box sx={style.infoCard}>
          <Box
            component="img"
            src={calendarIcon}
            alt="Calendar Icon"
            sx={style.infoIcon}
          />
          <Typography sx={style.infoCardTitle}>
            Account Created
          </Typography>
          <Typography sx={style.infoText}>
            8/31/2025
          </Typography>
        </Box>

        <Box sx={style.infoCard}>
          <Box
            component="img"
            src={calendarIcon}
            alt="Calendar Icon"
            sx={style.infoIcon}
          />
          <Typography sx={style.infoCardTitle}>
            Last Updated
          </Typography>
          <Typography sx={style.infoText}>
            Never updated
          </Typography>
        </Box>

        <Box sx={style.infoCard}>
          <Box
            component="img"
            src={calendarIcon}
            alt="Calendar Icon"
            sx={style.infoIcon}
          />
          <Typography sx={style.infoCardTitle}>
            Session
          </Typography>
          <Typography sx={style.infoText}>
            Current browser session active
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SecurityComponnt;
