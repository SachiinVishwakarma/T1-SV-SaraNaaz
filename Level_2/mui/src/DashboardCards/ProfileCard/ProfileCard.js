
import { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProfileCompnntTheme from "../../Theme/ProfileTheme.js";
import InputBox from "../../components/AuthAndInputComponent/InputBox.js";
import validateProfile from "./profileLogic.js";
import {getUser, getLastUser} from "../../components/StorageDataSetandGet/setAndGet.js"
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

  const [errors, setErrors] = useState({});

  const formData = {
  fullName,
  dateOfBirth,
  email,
  phone,
  address,
  pinCode,
  city,
  country,
  gitHubProfile,
};

const handleSave = () => {
  const validationErrors = validateProfile(formData);

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {

    let LastUser=getLastUser();

    let userDetails=getUser();

    const index= LastUser[0]["Index No"];

    let [firstName="", lastName=""] = fullName.split(" ")

        userDetails[index]["First Name"] = firstName;
        userDetails[index]["Last Name"] = lastName;
        userDetails[index]["Email Address"] = email;
        userDetails[index]["Date of Birth"] = dateOfBirth;
        userDetails[index]["Phone No."] = phone;
        userDetails[index]["Street Address"] = address;
        userDetails[index]["Pincode"] = pinCode;
        userDetails[index]["City"] = city;
        userDetails[index]["Country"] = country;
        userDetails[index]["GitHub Profile"] = gitHubProfile;

        localStorage.setItem("userDetails",JSON.stringify(userDetails));

        LastUser[0]["First Name"] = firstName;
        LastUser[0]["Last Name"] = lastName;
        LastUser[0]["Email Address"] = email;
        LastUser[0]["Index No"] = index;

        localStorage.setItem("lastUser",JSON.stringify(LastUser));

    alert("Profile saved successfully!");
    window.location.reload();
  }
};

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
           error={Boolean(errors.fullName)}
           helperText={errors.fullName}
        />

        <InputBox
          label="Date of Birth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          size="medium"
          type="date"
          error={Boolean(errors.dateOfBirth)}
           helperText={errors.dateOfBirth}
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
          error={Boolean(errors.email)}
           helperText={errors.email}
        />

        <InputBox
          label="Phone Number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          size="medium"
          type="tel"
          placeholder="+91 9876543210"
          error={Boolean(errors.phone)}
           helperText={errors.phone}
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
            error={Boolean(errors.address)}
            helperText={errors.address}
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
          error={Boolean(errors.pinCode)}
           helperText={errors.pinCode}
        />

        <InputBox
          label="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          size="medium"
          type="text"
          placeholder="Ranchi"
          error={Boolean(errors.city)}
           helperText={errors.city}
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
          error={Boolean(errors.country)}
           helperText={errors.country}
        />

        <InputBox
          label="GitHub Profile"
          name="gitHubProfile"
          value={gitHubProfile}
          onChange={(e) => setGitHubProfile(e.target.value)}
          size="medium"
          type="text"
          placeholder="https://github.com/username"
          error={Boolean(errors.gitHubProfile)}
           helperText={errors.gitHubProfile}
        />
      </Box>

      <Box sx={style.buttons}>
        <Button sx={style.cancelButton} onClick={handleCancel}>
          Cancel changes
        </Button>

        <Button sx={style.saveButton} onClick={handleSave}>
          Save changes
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileComponnt;
