import DashComponent from "../components/DashComponent/DashComponent.js";
import ProfileComponnt from "../components/ProfileComponent/ProfileCompnnt.js";
import { useState } from "react";
// sending

function DashProfile() {
   const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gitHubProfile, setGitHubProfile] = useState("");
  return (  
    <DashComponent>
      <ProfileComponnt
        fullName={fullName}
        onFullNameChange={(e) => setFullName(e.target.value)}

        email={email}
        onEmailChange={(e) => setEmail(e.target.value)}

        phone={phone}
        onPhoneChange={(e) => setPhone(e.target.value)}

        pinCode={pinCode}
        onPinCodeChange={(e) => setPinCode(e.target.value)}

        city={city}
        onCityChange={(e) => setCity(e.target.value)}

        country={country}
        onCountryChange={(e) => setCountry(e.target.value)}

        gitHubProfile={gitHubProfile}
        onGitHubProfileChange={(e) =>
          setGitHubProfile(e.target.value)
        }
      />
    </DashComponent>
  );
}

export default DashProfile;