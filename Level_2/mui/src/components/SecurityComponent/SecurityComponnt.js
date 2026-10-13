import { Box, Typography, Button} from "@mui/material";
import calendarIcon from "../Assets/icon.png";
import { useTheme } from "@mui/material/styles";
import SecurityComponntTheme from "../../Theme/SecurityComponntTheme.js";
import InputBox from "../AuthAndInputComponent/InputBox.js";

function SecurityComponnt({
  currentPassword,
  newPassword,
  confirmPassword,

  onCurrentPasswordChange,
  onNewPasswordChange,
  onConfirmPasswordChange,

  onClear,
  onUpdatePassword,
}) {
  const theme = useTheme();
  const style = SecurityComponntTheme(theme);

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
          onChange={onCurrentPasswordChange}
          size="medium"
          type="password"
          placeholder="Enter current password"
        />

        <InputBox
          label="New Password"
          name="newPassword"
          value={newPassword}
          onChange={onNewPasswordChange}
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
          onChange={onConfirmPasswordChange}
          size="medium"
          type="password"
          placeholder="Re-enter new password"
        />

      </Box>

      <Box sx={style.buttons}>

        <Button
          sx={style.clearButton}
          onClick={onClear}
        >
          Clear
        </Button>

        <Button
          sx={style.updateButton}
          onClick={onUpdatePassword}
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