import React from "react";
import {
  Box,
  Typography,   
  Checkbox,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";import LockIcon from "@mui/icons-material/Lock";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import NotificationTheme from "../../Theme/NotificationTheme";

const NotificationComponnt = () => {
  const theme = useTheme();
  const styles = NotificationTheme(theme);

  return (
    <Box sx={styles.card}>
      <Typography sx={styles.title}>
        Notifications
      </Typography>

      <Box sx={styles.section}>
        <Box sx={styles.sectionHeading}>
          <NotificationsIcon sx={styles.icon} />
          <Typography sx={styles.heading}>
            Notification Preferences
          </Typography>
        </Box>

        <Typography sx={styles.description}>
          Manage how and when you receive notifications about your account activity.
        </Typography>

        <Box sx={styles.preferenceContainer}>
          <Box sx={styles.preferenceCard}>
            <MailOutlineIcon sx={styles.icon} />

            <Typography sx={styles.preferenceTitle}>
              Email Notifications
            </Typography>

            <Typography sx={styles.smallDescription}>
              Receive important updates via email
            </Typography>

            <FormControlLabel
              sx={styles.checkboxLabel}
              control={<Checkbox defaultChecked size="small" sx={styles.checkbox} />}
              label="Enable email notifications"
            />
          </Box>

          <Box sx={styles.preferenceCard}>
            <LockIcon sx={styles.icon} />

            <Typography sx={styles.preferenceTitle}>
              Security Alerts
            </Typography>

            <Typography sx={styles.smallDescription}>
              Get notified about security changes
            </Typography>

            <FormControlLabel
              sx={styles.checkboxLabel}
              control={<Checkbox defaultChecked size="small" sx={styles.checkbox} />}
              label="Enable security alerts"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.activitySection}>
        <Box sx={styles.sectionHeading}>
          <AssignmentTurnedInOutlinedIcon sx={styles.activityIcon} />
          <Typography sx={styles.heading}>
            Recent Activity
          </Typography>
        </Box>

        <Box sx={styles.activityCard}>
         <FormControlLabel
              sx={styles.checkboxPreference}
              control={<Checkbox defaultChecked size="small" sx={styles.checkbox} />}
            />  
          <Typography sx={styles.preferenceTitle}>
            Profile Updated
          </Typography>

          <Typography sx={styles.smallDescription}>
            Your profile information was successfully updated
          </Typography>

          <Typography sx={styles.smallDescription}>
            Today
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationComponnt;