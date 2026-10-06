import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getUser,
  getLastUser,
  saveLastUser
} from "../StorageDataSetandGet/setAndGet.js";


const useLoginLogic = () => {

  const loadPage = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({});

  const storedData = getUser();


  // On page load
  useEffect(() => {

    if (storedData.length > 0) {

      const lastUser = storedData[storedData.length - 1];

      setFormData({
        email: lastUser["Email Address"],
        password: lastUser["Password"],
      });

    }

  }, []);


  // On typing
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  // On submit
  const handleSubmit = (e) => {

    e.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();

    const newError = {};


    if (!email) {
      newError.email = "Email is required";
    }

    if (!password) {
      newError.password = "Password is required";
    }


    if (Object.keys(newError).length > 0) {

      setErrors(newError);

      return;
    }


    let matchedUser = null;
    let matchedIndex = -1;


    for (const [index, ele] of storedData.entries()) {

      if (
        ele["Email Address"] === email &&
        ele["Password"] === password
      ) {

        matchedUser = ele;
        matchedIndex = index;

        break;
      }

    }


    // Login failed
    if (!matchedUser) {

      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });

      return;
    }


    // Login successful
    setErrors({});


    let lastUser = getLastUser();

    lastUser.pop();

    lastUser.push({
      "First Name": matchedUser["First Name"],
      "Last Name": matchedUser["Last Name"],
      "Email Address": matchedUser["Email Address"],
      "Password": matchedUser["Password"],
      "Index No": matchedIndex,
      "AccCreate Date": matchedUser["AccCreate Date"],
      "Last Updated": matchedUser["Last Updated"],
    });


    saveLastUser(lastUser);

    alert("Login successful!");

    loadPage("/DashBoard_Overview");
  };


  return {
    formData,
    error,
    handleChange,
    handleSubmit
  };

};


export default useLoginLogic;