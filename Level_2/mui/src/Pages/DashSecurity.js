//Adding
import { useState } from "react";
import DashComponent from "../components/DashComponent/DashComponent.js";
import SecurityComponnt from "../components/SecurityComponent/SecurityComponnt.js";

function DashSecurity() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClear = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleUpdatePassword = () => {
    // Password update logic bdd me !!
    console.log("Password update clicked");
  };

  return (
    <DashComponent>

      <SecurityComponnt
        currentPassword={currentPassword}
        onCurrentPasswordChange={(e) =>
          setCurrentPassword(e.target.value)
        }

        newPassword={newPassword}
        onNewPasswordChange={(e) =>
          setNewPassword(e.target.value)
        }

        confirmPassword={confirmPassword}
        onConfirmPasswordChange={(e) =>
          setConfirmPassword(e.target.value)
        }

        onClear={handleClear}
        onUpdatePassword={handleUpdatePassword}
      />

    </DashComponent>
  );
}

export default DashSecurity;