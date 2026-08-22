
    let form = document.querySelector(".signUp-form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        document.getElementById("errFirst").innerText = "";
        document.getElementById("errLast").innerText = "";

        document.getElementById("errEmail").innerText = "";
    
        document.getElementById("errConfirm").innerText = "";
        document.getElementById("errPass").innerText = "";


        let inputFname = document.getElementById("fname").value.trim();
        let inputLname = document.getElementById("lname").value.trim();

        let inputEmail = document.getElementById("email").value.trim();
               
        let inputpass = document.getElementById("password").value.trim();
        let inputConfirm = document.getElementById("confirm").value.trim(); 


        let isbool = true;

 //calling functions section!
        checkpass();
       checkEmail();
       checkName();
       



        //storing in localStorage from here

        if (isbool==false) {

             alert("An unexpected error occurred. Please try again!");            
         
        }
        else {

               // code for local storage...

           
 
    let firstName=event.target.First.value.trim();
    let lastName=event.target.Last.value.trim();
    let emailAddress=event.target.Email.value.trim();
    let password=event.target.Password.value.trim();
    

    let isExisting = false;

    var formInput = JSON.parse(localStorage.getItem("userDetails"))?? [];
    // localStorage.clear("userDetails");

    for (const ele of formInput) {
        if(ele["Email Address"]== emailAddress){
            isExisting = true;
            break;
        }       
    }

    if(isExisting==true){
                alert("Submit fired!");
        alert("This email is already registered. Please sign in or use a different email address.");
    }
    else{

        formInput.push({
        "First Name": firstName,
        "Last Name": lastName,
        "Email Address": emailAddress,
        "Password": password,
        "AccCreate Date": new Date().toLocaleDateString(),
        "Last Updated": "Never Updated"

    });

    
    localStorage.setItem("userDetails",JSON.stringify(formInput));
                alert("Form submitted successfully");
                location.href = "http://127.0.0.1:5500/html%20files/Login-Index.html";


    } //ennded code of local
 }  
 
 

         //check email below
         function checkEmail() {


            let validDomain = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@live.com", "@icloud.com" ];

            let isValidDomain= validDomain.some(domain=>{
                return inputEmail.endsWith(domain); 
            });


        let specialChar= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?"];

        let isSpecialChar= specialChar.some(sChar=>{
            return inputEmail.includes(sChar);
        })

            let warning1 = document.getElementById("errEmail");

            if (inputEmail == "") {

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
        function checkpass() {

            let warning1 = document.getElementById("errPass");
            let warning2 = document.getElementById("errConfirm");
           
            let hasLetter= false;
            let hasNumber= false;

            for (let char of inputpass) {
                
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


             if (inputpass == "") {
                warning1.innerText = "All fields are required.";
                warning1.style.color = "red";

                 

                isbool = false;
            }

            else if(inputConfirm==""){
                
                 warning2.innerText = "All fields are required.";
                warning2.style.color = "red";

                isbool = false;

            }
        

         else  if(inputpass.length<8){

            warning1.innerText = "Password must be atleast 8 characters";
                
                warning1.style.fontSize = "12px";

                 warning1.style.color = "red";

                                isbool = false;


           }
            else if(!hasLetter || !hasNumber){

                warning1.innerText = "Password must contain latters and numbers";
                warning1.style.color = "red";

                isbool = false;

                }


           else if (inputpass !==inputConfirm ) {

                warning2.innerText = "Passwords do not match";
                
                warning2.style.fontSize = "12px";

                 warning2.style.color = "red";


                     isbool = false;
            }
            

           
        } 




        //checking Names below
        function checkName(){


        let specialChar= [" ",",", ":", "\\", "/", "(", ")", "[", "]", "{", "}", '"', "'", "!", "#", "$", "%", "^", "&", "*", "=", "?", "@"];

        let isScharFirst= specialChar.some(sChar=>{
            return inputFname.includes(sChar);
        })

        let numbers=["0","1","2","3","4","5","6","7","8","9"];

        let isNumFirst= numbers.some(Num=>{
            return inputFname.includes(Num);
        })


         let isScharLast= specialChar.some(sChar=>{
            return inputLname.includes(sChar);
        })

        let isNumLast= numbers.some(Num=>{
            return inputLname.includes(Num);
        })






            let errFirst=document.getElementById("errFirst");

            let errLast=document.getElementById("errLast");


            if((inputFname.length<2 || inputFname.length>50) || (isScharFirst) || (isNumFirst)){

                errFirst.innerText = "Please enter a valid name";
                errFirst.style.color = "red";

                isbool = false;

            }


             if(inputLname.length<1 || inputLname.length>50  || (isScharLast) || (isNumLast)  ){

                errLast.innerText = "Please enter a valid name";
                errLast.style.color = "red";

                isbool = false;

            }
        }

    });





































