import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { saveUser } from "../StorageDataSetandGet/setAndGet.js";
import { getUser } from "../StorageDataSetandGet/setAndGet.js";

const useSignupLogic=()=>{

 const loadPage=useNavigate();

  

  //Validation code starts from here!!

  const [formData, setFormData]= useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const[error, setErrors]=useState({});

  const handleChange=(e)=> {
    const {name,value, type, checked} =e.target;

    setFormData({
      ...formData,
      [name]: type==="checkbox"? checked:value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const firstName = formData.firstName.trim();
  const lastName = formData.lastName.trim();
  const email = formData.email.trim();
  const password = formData.password.trim();
  const confirmPassword = formData.confirmPassword.trim();
  const terms = formData.terms;

  const newError = {};

  if (!firstName) {
    newError.firstName = "First Name is required";
  }

  if (!lastName) {
    newError.lastName = "Last Name is required";
  }

  if (!email) {
    newError.email = "Email is required";
  }

  if (!password) {
    newError.password = "Password is required";
  }

  if (!confirmPassword) {
    newError.confirmPassword = "Confirm Password is required";
  }

  if (!terms) {
    alert("You must agree to the Terms");
  }

  const validDomain = [
    "@gmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@hotmail.com",
    "@live.com",
    "@icloud.com",
  ];

  const isValidDomain = validDomain.some((domain) =>
    email.endsWith(domain)
  );

  const specialChar = [
    " ", ",", ":", "\\", "/", "(", ")", "[", "]",
    "{", "}", '"', "'", "!", "#", "$", "%", "^",
    "&", "*", "=", "?"
  ];

  const isSpecialChar = specialChar.some((sChar) =>
    email.includes(sChar)
  );

  if (email && (!isValidDomain || isSpecialChar)) {
    newError.email = "Please enter a valid email";
  }

  let hasLetter = false;
  let hasNumber = false;

  for (let char of password) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z")
    ) {
      hasLetter = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  if (password.length < 8) {
    newError.password = "Password must be at least 8 characters";
  } 
  else if ((!hasLetter || !hasNumber)) {
    newError.password = "Password must contain letter and number";
  }

  if (confirmPassword !== password) {
    newError.confirmPassword = "Passwords do not match";
  }

  //Name Validation..


        let specialCharName= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];

        let isScharFirst= specialCharName.some(sChar=>{
            return firstName.includes(sChar);
        })

        let numbers=["0","1","2","3","4","5","6","7","8","9"];

        let isNumFirst= numbers.some(Num=>{
            return firstName.includes(Num);
        })


         let isScharLast= specialCharName.some(sChar=>{
            return lastName.includes(sChar);
        })

        let isNumLast= numbers.some(Num=>{
            return lastName.includes(Num);
        })

         if((firstName.length<2 || firstName.length>50) || (isScharFirst) || (isNumFirst)){

              newError.firstName = "Please enter a valid name";


            }


             if(lastName.length<1 || lastName.length>50  || (isScharLast) || (isNumLast)  ){

                newError.lastName = "Please enter a valid name";


            }




 //local task

  let storeData=getUser();

  for (const ele of storeData) {
        if(ele["Email Address"]== email){
          alert("Submit fired!")
          newError.email = "This email is already registered. Please sign in or use a different email address";
  
            break;
        }       
    }

  setErrors(newError);

  if (Object.keys(newError).length === 0 && terms) {
    storeData.push({
       "First Name": firstName,
        "Last Name": lastName,
        "Email Address": email,
        "Password": password,
        "AccCreate Date": new Date().toLocaleDateString(),
        "Last Updated": "Never Updated"
    });

    saveUser(storeData);

    alert("Account created!");
     

    loadPage("/login");
  }
 };
 return{
  formData,
    error,
    handleChange,
    handleSubmit  
 };
};

export default useSignupLogic;

