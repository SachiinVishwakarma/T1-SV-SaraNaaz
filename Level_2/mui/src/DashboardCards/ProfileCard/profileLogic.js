const validateProfile = (formData) => {
  const errors = {};
//done
  if (!formData.fullName.trim()) {
  errors.fullName = "Full name is required";
} else if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 50) {
  errors.fullName = "Not a valid name";
} else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
  errors.fullName = "Only letters are allowed";
}

//done
  if (!formData.dateOfBirth) {
  errors.dateOfBirth = "Date of birth is required";
} else {
  const dob = new Date(formData.dateOfBirth);
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 6,
    today.getMonth(),
    today.getDate()
  );

  if (dob > minDate) {
    errors.dateOfBirth = "User must be at least 6 years old";
  }
}

  //done
  if (!formData.email.trim()) {
  errors.email = "Email is required";
} else if (
  !/^[a-zA-Z0-9]+@[a-zA-Z]+\.[cC][oO][mM]$/.test(
    formData.email.trim()
  )
) {
  errors.email =
    "Enter a valid email (e.g., arzu@gmail.com)";
}

//done
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^(\+91 )?[0-9]{10}$/.test(formData.phone)) {
    errors.phone = "Enter a valid phone number";
  }

//done
  if (!formData.address.trim()) {
  errors.address = "Address is required";
} else if (formData.address.trim().length < 4) {
  errors.address = "Not a valid Address";
} else if (/[\\\/()[\]{}!#$%^&*=?@]/.test(formData.address)) {
  errors.address = "Address contains invalid special characters";
} else if (!/[a-zA-Z]/.test(formData.address)) {
  errors.address = "Address must contain letters";
}


//done
  if (!/^\d{6}$/.test(formData.pinCode)) {
    errors.pinCode = "Enter a valid 6-digit PIN code";
  }

  //done
 if (!formData.city.trim()) {
  errors.city = "City is required";
} else if (
  formData.city.trim().length < 2 ||
  formData.city.trim().length > 50
) {
  errors.city = "City name must be 2-50 characters";
} else if (!/^[A-Za-z ]+$/.test(formData.city.trim())) {
  errors.city = "City name must contain only letters";
}


//done
  if (!formData.country.trim()) {
  errors.country = "Country is required";
} else if (!/^[A-Za-z ]{2,50}$/.test(formData.country.trim())) {
  errors.country = "Enter a valid country name";
}

//done
   if (!formData.gitHubProfile.trim()) {
  errors.gitHubProfile = "GitHub profile is required";
} else if (!/^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/.test(formData.gitHubProfile)) {
  errors.gitHubProfile = "Enter a valid GitHub profile URL";
}

  return errors;
};

export default validateProfile;