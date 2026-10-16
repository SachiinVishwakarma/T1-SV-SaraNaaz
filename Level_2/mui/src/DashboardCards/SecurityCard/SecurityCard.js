import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SecurityComponntTheme from "../../Theme/SecurityTheme.js";
import InputBox from "../../components/AuthAndInputComponent/InputBox.js";
import calendarIcon from "../../components/Assets/icon.png";

function SecurityComponnt() {
  const theme = useTheme();
  const style = SecurityComponntTheme(theme);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClear = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (newPassword.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    // password update logic baad mein add karna
    console.log("Password update clicked");
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
        />

        <InputBox
          label="New Password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          size="medium"
          type="password"
          placeholder="Minimum 6 characters"
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
