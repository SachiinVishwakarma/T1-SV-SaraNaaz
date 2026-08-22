
let lastLogin=JSON.parse(localStorage.getItem("lastLogin"));

let Fname = lastLogin[0]["First Name"];
let Lname = lastLogin[0]["Last Name"];

let welcmHead= document.querySelector(".welcmUser");


welcmHead.innerHTML=`<h2 id="welcm">Welcome back, ${Fname} ${Lname}</h2>`; 

//sidebar

let sideName_Email =document.querySelector(".head");

let email= lastLogin[0]["Email Address"];

sideName_Email.innerHTML=`<h3 id="userName">${Fname} ${Lname}</h3>
                                <p id="email">${email}</p>`;

let iconLogo = Fname[0].toUpperCase()+ (Lname[0]? Lname[0].toUpperCase(): "");

let logo= document.getElementById("logo");
logo.textContent=`${iconLogo}`;

        let index=lastLogin[0]["Index No"]; 
        let accCreated=lastLogin[0]["AccCreate Date"]; 
        let lastUpdated=lastLogin[0]["Last Updated"]; 

        let userDetails = JSON.parse(localStorage.getItem("userDetails"))?? [];


          let showDate=document.querySelector("#showDate");
          showDate.innerText=accCreated;

          let showUpdate = document.getElementById("lastUpdated");
           showUpdate.innerText=lastUpdated;
    


         //If signOut dashboard!

        let signOut= document.getElementById("signOut");
        signOut.addEventListener("click", ()=>{
         lastLogin.pop();

         localStorage.setItem("lastLogin",JSON.stringify(lastLogin))
           
          });


        

function showDashPage(id) {
    document.querySelectorAll(".dashPage").forEach(page => page.classList.remove("active"));

    document.getElementById(id).classList.add("active");

 
    document.querySelectorAll(".ele").forEach(ele=> ele.classList.remove("selectedMenu"))

     
    document.querySelector(`#selectedMenu_${id}`).parentElement.classList.add("selectedMenu");
    console.log()



}




//profile Settings updation on local


    let profileForm= document.querySelector("#profileUpdate");

    let cnclbtn=document.getElementById("cnclChange");

    cnclbtn.addEventListener('click', ()=>{

        document.getElementById("addressSection").value="";
        document.querySelectorAll("input").forEach(inp => {

            inp.value="";

        });

    })


    profileForm.addEventListener("submit", function (event) {

        event.preventDefault();



        let fullName = event.target.fullName.value.trim();
        let birthDate = event.target.birthDate.value.trim();
         let emailAdd = event.target.emailAdd.value.trim();
        let phone = event.target.phone.value.trim();
        let addressSection = event.target.addressSection.value.trim();
        let pincode = event.target.pincode.value.trim();
        let city = event.target.city.value.trim(); 
         let countryName = event.target.country.value.trim();
        let gitHubProfile = event.target.gitHubProfile.value.trim();
       

        //clean up err

       
        document.getElementById("errFullName").innerText="";
        document.getElementById("errphoneNo").innerText="";
         document.getElementById("errEmail").innerText="";
        document.getElementById("erraddrss").innerText="";
        document.getElementById("errpinCode").innerText="";



 let isbool = true;


       


//calling functions section!
        checkPhone();
       checkEmail();
       checkName();
       checkaddrss();
       checkPinCode();
       

        //storing in localStorage from here

        if (isbool) {

              // code for local storage...
   

    let isExisting = false;
    
    // localStorage.clear("userDetails");

    for (const [i, ele] of userDetails.entries()) {

        if(i==index) {continue;}
    
        if(ele["Email Address"]== emailAdd){
            isExisting = true;
            break;
        } 
             
    }

    if(isExisting==true){
                alert("Submit fired!");
        alert("This email is already registered. Please sign in or use a different email address.");
    }
    else{   

         let [firstName="", lastName=""]=fullName.split(" ");

        userDetails[index]["First Name"] = firstName;
        userDetails[index]["Last Name"] = lastName;
        userDetails[index]["Email Address"] = emailAdd;
        userDetails[index]["Date of Birth"] = birthDate;
        userDetails[index]["Phone No."] = phone;
        userDetails[index]["Street Address"] = addressSection;
        userDetails[index]["Pincode"] = pincode;
        userDetails[index]["City"] = city;
        userDetails[index]["Country"] = countryName;
        userDetails[index]["GitHub Profile"] = gitHubProfile;


        localStorage.setItem("userDetails",JSON.stringify(userDetails));

        lastLogin[0]["First Name"] = firstName;
        lastLogin[0]["Last Name"] = lastName;
        lastLogin[0]["Email Address"] = emailAdd;
        lastLogin[0]["Index No"] = index;


        localStorage.setItem("lastLogin",JSON.stringify(lastLogin));
//dashbrd appearence change
           //1. on dash card
        welcmHead.innerHTML=`<h2 id="welcm">Welcome back, ${firstName} ${lastName}</h2>`;
           //2. on dash card
        sideName_Email.innerHTML=`<h3 id="userName">${firstName} ${lastName}</h3>
                                <p id="email">${emailAdd}</p>`;

           //3. on dash card
         iconLogo = firstName[0].toUpperCase()+ lastName[0].toUpperCase();

         logo= document.getElementById("logo");
        logo.textContent=`${iconLogo}`

        alert("Changes Saved Successfully");


         location.reload();

    }

//ennded code of local  and else section

                        
         
        }
        else {


         alert("An unexpected error occurred. Please try again!");


             
        }

 

         //check email below
         function checkEmail() {


            let validDomain = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@live.com", "@icloud.com" ];

            let isValidDomain= validDomain.some(domain=>{
                return emailAdd.endsWith(domain); 
            });


        let specialChar= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?"];

        let isSpecialChar= specialChar.some(sChar=>{
            return emailAdd.includes(sChar);
        })



            let warning1 = document.getElementById("errEmail");

            if (emailAdd == "") {

                warning1.innerText = "All fields are required.";
                warning1.style.color = "red";

                isbool = false;
            }


            // "@gmail.com" || "@yahoo.com" || "@outlook.com" || "@hotmail.com" || "@live.com" || "@icloud.com" ))
            //  || (inputEmail.includes(" " || "," || ":" || `\` || "/" || "(" || ")" || "[" || "]" || "{" || "}" || `"` || `' ` || "!" || "#" || "$" || "%" || "^" || "&" || "*" || "=" || "?" ))) {

            else if (isValidDomain==false || isSpecialChar== true) {

                warning1.innerText = "Oops! Your email format is incorrect.";
                warning1.style.color = "red";

                isbool = false;
            }

        }


        // check password below

        function checkPhone() {

            let warning1 = document.getElementById("errphoneNo");

          let specialChar= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];

            
            let hasLetter= false;
            let hasSchar= false;

            let isSpecialChar= specialChar.some(sChar=>{
            return phone.includes(sChar);
           })


            for (let char of phone) {
                
                if((char>="A" && char<="Z")||(char>="a" && char<="z")){
                    hasLetter= true;
                }
                

                if(hasLetter){

                    break;
                
                }
            }


             if (phone == "") {
                warning1.innerText = "All fields are required.";
                warning1.style.color = "red";

                isbool = false;
            }
        

         else  if(phone.length<10 || phone.length>10){

            warning1.innerText = "Please enter a valid phone number";
                
                warning1.style.fontSize = "12px";

                 warning1.style.color = "red";

                                isbool = false;


           }
            else if(hasLetter || isSpecialChar){

                warning1.innerText = "Phone Number must contain only numbers";
                warning1.style.color = "red";

                isbool = false;

                }      
          } 




          //checking Names below
          function checkName(){


          let specialChar= [",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];
        let numbers=["0","1","2","3","4","5","6","7","8","9"];

         let isScharFirst= specialChar.some(sChar=>{
            return fullName.includes(sChar);
          })

          let isNumName= numbers.some(num=>{
            return fullName.includes(num);
          })

            let errFullName=document.getElementById("errFullName");



            if((fullName.length<4 || fullName.length>100) || (isScharFirst) || (isNumName)){

                errFullName.innerText = "Please enter a valid name" ;
                errFullName.style.color = "red";

                isbool = false;

            }
          }



          //address check

          function checkaddrss(){
            let warning2=document.getElementById("erraddrss");

            let specialChar= [ "\\", "/", "(", ")", "[", "]", "{", "}", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];

         let isScharFirst= specialChar.some(sChar=>{
            return addressSection.includes(sChar);
          })

          if(isScharFirst){
             warning2.innerText = "Address contains invalid special characters!";
                warning2.style.color = "red";

                isbool = false;
          }
          }


          function checkPinCode(){
        
             let warning1 = document.getElementById("errpinCode");

          let specialChar= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];

          
            
            let hasLetter= false;
            let hasSchar= false;

            let isSpecialChar= specialChar.some(sChar=>{
            return pincode.includes(sChar);
           })


            for (let char of pincode) {
                
                if((char>="A" && char<="Z")||(char>="a" && char<="z")){
                    hasLetter= true;
                }
                

                if(hasLetter){

                    break;
                
                }
            }


             if (pincode == "") {



                warning1.innerText = "All fields are required.";
                warning1.style.color = "red";

                

                isbool = false;
            }
        

         else  if(pincode.length<6 || pincode.length>6){

            warning1.innerText = "Please enter a valid Pincode ";
                
                warning1.style.fontSize = "12px";

                 warning1.style.color = "red";

                                isbool = false;


           }
            else if(hasLetter || isSpecialChar){

                warning1.innerText = "Pincode must contain only numbers";
                warning1.style.color = "red";

                isbool = false;

                }


            
          } 


});
// profileChanges ends here;


//securityForm

let securityForm=document.getElementById("securityForm");

 let clrbtn= document.getElementById("clearbtn");
       clrbtn.addEventListener("click", ()=>{
          document.querySelectorAll("input").forEach(inp=>{
            inp.value="";
          })
       });






securityForm.addEventListener("submit", function(event){
            event.preventDefault();
    let crrntPass = event.target.crrntPass.value.trim();
        let Npass = event.target.Npass.value.trim();
         let nConfirm = event.target.Confirm.value.trim();

         //Clearing
        document.getElementById("errCrrntPass").innerText="";
        document.getElementById("errNpass").innerText="";
         document.getElementById("errConfirm").innerText="";


         let isUpdate = true;

        


         //function calling

        matchPass();
        checkUpdatedPass();







         //isUpdate true or false check


         if(!isUpdate){

            alert("Password update canceled!");

         }

         else{

            let updatedDate=new Date().toLocaleString();


            userDetails[index]["Password"]=Npass;
            userDetails[index]["Last Updated"]=updatedDate;
            
            lastLogin[0]["Password"]=Npass;
            lastLogin[0]["Last Updated"]=updatedDate;


            showUpdate.innerText=updatedDate;



            
            alert("Password updated successfully!");

            localStorage.setItem("userDetails",JSON.stringify(userDetails));
            localStorage.setItem("lastLogin",JSON.stringify(lastLogin));

            securityForm.submit();

         }

         //functions from here

            function matchPass(){


                  let oldPass= userDetails[index]["Password"];
                if(crrntPass==oldPass){
                        isUpdate = true;
                }

                else if(crrntPass!==oldPass){

                let warning1 = document.getElementById("errCrrntPass");
                warning1.innerText = "Please enter correct password!";
                warning1.style.color = "red";

                    isUpdate = false;

                }            
                }





            function checkUpdatedPass() {

            let warning1 = document.getElementById("errNpass");
            let warning2 = document.getElementById("errConfirm");

            let hasLetter= false;
            let hasNumber= false;

            for (let char of Npass) {
                
                if((char>="A" && char<="Z")||(char>="a" && char<="z")){
                    hasLetter= true;
                }
                
                if((char>="0" && char<="9")){
                    hasNumber= true;
                }

                if(hasLetter && hasNumber){

                    break;
                
                }
            }


             if (Npass == "") {


                warning1.innerText = "Please enter new password";
                warning1.style.color = "red";
                
                    isUpdate = false;
            }

             else if( nConfirm==""){

                 warning2.innerText = "Please confirm your password";
                 warning2.style.color = "red";
                             isUpdate = false;

                   }


             else  if(Npass.length<8){

                 warning1.innerText = "Password must be atleast 8 characters";
                
                  warning1.style.fontSize = "12px";

                   warning1.style.color = "red";

                      isUpdate = false;


                }
              else if(!hasLetter || !hasNumber){

                warning1.innerText = "Password must contain latters and numbers";
                warning1.style.color = "red";

                isUpdate = false;

                }


                 else if (Npass !==nConfirm ) {

                warning2.innerText = "Passwords do not match";
                
                warning2.style.fontSize = "12px";

                 warning2.style.color = "red";


                                isUpdate = false;
            }
        } 
});







