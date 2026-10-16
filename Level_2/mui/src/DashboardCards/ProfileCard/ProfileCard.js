
import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProfileCompnntTheme from "../../Theme/ProfileTheme.js";
import InputBox from "../../components/AuthAndInputComponent/InputBox.js";

function ProfileComponnt() {
  const theme = useTheme();
  const style = ProfileCompnntTheme(theme);

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gitHubProfile, setGitHubProfile] = useState("");

  const handleCancel = () => {
    setFullName("");
    setDateOfBirth("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPinCode("");
    setCity("");
    setCountry("");
    setGitHubProfile("");
  };

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
          onChange={(e) => setFullName(e.target.value)}
          size="medium"
          type="text"
          placeholder="Demo User"
        />

        <InputBox
          label="Date of Birth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          size="medium"
          type="date"
        />
      </Box>

      <Box sx={style.inputRow}>
        <InputBox
          label="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="medium"
          type="email"
          placeholder="demo@gmail.com"
        />

        <InputBox
          label="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
            fullWidth
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          onChange={(e) => setPinCode(e.target.value)}
          size="medium"
          type="text"
          placeholder="123456"
        />

        <InputBox
          label="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
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
          onChange={(e) => setCountry(e.target.value)}
          size="medium"
          type="text"
          placeholder="India"
        />

        <InputBox
          label="GitHub Profile"
          name="gitHubProfile"
          value={gitHubProfile}
          onChange={(e) => setGitHubProfile(e.target.value)}
          size="medium"
          type="text"
          placeholder="https://github.com/username"
        />
      </Box>

      <Box sx={style.buttons}>
        <Button sx={style.cancelButton} onClick={handleCancel}>
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
