import { Box, Typography, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProfileCompnntTheme from "../../Theme/ProfileCompnntTheme.js";
import InputBox from "../AuthAndInputComponent/InputBox.js";
// sending
function ProfileComponnt({
  fullName,
  dateOfBirth,
  email,
  phone,
  address,
  pinCode,
  city,
  country,
  gitHubProfile,

  onFullNameChange,
  onDateOfBirthChange,
  onEmailChange,
  onPhoneChange,
  onAddressChange,
  onPinCodeChange,
  onCityChange,
  onCountryChange,
  onGitHubProfileChange,
}) {
  const theme = useTheme();
  const style = ProfileCompnntTheme(theme);

  return (
    <Box sx={style.profileCard}>

      <Typography sx={style.profileTitle}>
        Profile Settings
      </Typography>

      <Typography sx={style.sectionTitle}>
        Personal Information
      </Typography>

      <Box sx={style.inputRow}>

        <InputBox
          label="Full Name"
          name="fullName"
          value={fullName}
          onChange={onFullNameChange}
          size="medium"
          type="text"
          placeholder="Demo User"
        />

        <InputBox
          label="Date of Birth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={onDateOfBirthChange}
          size="medium"
          type="date"
        />

      </Box>

      <Box sx={style.inputRow}>

        <InputBox
          label="Email Address"
          name="email"
          value={email}
          onChange={onEmailChange}
          size="medium"
          type="email"
          placeholder="demo@gmail.com"
        />

        <InputBox
          label="Phone Number"
          name="phone"
          value={phone}
          onChange={onPhoneChange}
          size="medium"
          type="tel"
          placeholder="+91 9876543210"
        />

      </Box>

      <Box sx={style.addressSection}>

        <Typography sx={style.addressTitle}>
          Address Information
        </Typography>

        <Typography sx={style.label}>
          Street Address
        </Typography>

        <Box sx={style.addressInput}>
          <TextField
            name="address"
            value={address}
            onChange={onAddressChange}
            placeholder="Enter your complete address"
            multiline
            rows={3}
          />
        </Box>

      </Box>

      <Box sx={style.inputRow}>

        <InputBox
          label="PIN Code"
          name="pinCode"
          value={pinCode}
          onChange={onPinCodeChange}
          size="medium"
          type="text"
          placeholder="123456"
        />

        <InputBox
          label="City"
          name="city"
          value={city}
          onChange={onCityChange}
          size="medium"
          type="text"
          placeholder="Ranchi"
        />

      </Box>

      <Box sx={style.inputRow}>

        <InputBox
          label="Country"
          name="country"
          value={country}
          onChange={onCountryChange}
          size="medium"
          type="text"
          placeholder="India"
        />

        <InputBox
          label="gitHubProfile"
          name="gitHubProfile"
          value={gitHubProfile}
          onChange={onGitHubProfileChange}
          size="medium"
          type="text"
          placeholder="https://github.com/username"
        />

      </Box>

      <Box sx={style.buttons}>

        <Button sx={style.cancelButton}>
          Cancel changes
        </Button>

        <Button sx={style.saveButton}>
          Save changes
        </Button>

      </Box>

    </Box>
  );
}

export default ProfileComponnt;