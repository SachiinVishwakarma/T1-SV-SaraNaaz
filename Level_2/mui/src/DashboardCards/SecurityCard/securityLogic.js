
const validateSecurity = (formData, logedPassword) => {
  const errors = {};

  if (!formData.currentPassword.trim()) {
    errors.currentPassword = "Current password is required";
  } else if (formData.currentPassword !== logedPassword) {
    errors.currentPassword = "Please enter correct password";
  }

  if (!formData.newPassword.trim()) {
    errors.newPassword = "Please enter new password";
  } else if (formData.newPassword.length < 8) {
    errors.newPassword = "Password must be at least 8 characters";
  } else if (
    !/[a-zA-Z]/.test(formData.newPassword) ||
    !/[0-9]/.test(formData.newPassword)
  ) {
    errors.newPassword = "Password must contain letters and numbers";
  }

  if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = "Please confirm your password";
  } else if (formData.newPassword !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export default validateSecurity;
