
 
    //On Page reload
    var localData = JSON.parse(localStorage.getItem("userDetails"))?? [];



    if(localData.length>0){
    let lastUser= localData[localData.length-1];
    let inputEmail = document.getElementById("email").value=lastUser["Email Address"];
    let inputpass = document.getElementById("password").value=lastUser["Password"];
    }
    else if(localData.length==0){
    document.getElementById("email").value="";
    document.getElementById("password").value=""; 
    }  

    

    //validation check  
     let form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        document.getElementById("errEmail").innerText = "";
        document.getElementById("errPass").innerText = "";

        let inputEmail = document.getElementById("email").value.trim();
        let inputpass = document.getElementById("password").value.trim();

        let isbool = true;


        //calling functions
        checkEmail();
        checkPass();
        matchData();


         //Final check submit or not
        if (isbool==false) {

              alert("Submit fired, Please try again!");
        }

        else{
            location.href = "http://127.0.0.1:5500/html%20files/Dashbrd-index.html";

            alert("Form submitted successfully");

        }

        //Email Validation
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
            else if (isValidDomain==false || isSpecialChar== true) {

                warning1.innerText = "Oops! Your email format is incorrect.";
                warning1.style.color = "red";

                isbool = false;
            }

        }

        //Password Validation
        function checkPass() {

            let warning2 = document.getElementById("errPass");

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

                warning2.innerText = "All fields are required.";
                warning2.style.color = "red";

                isbool = false;
            }

            else if (inputpass.length < 8)  {

                warning2.innerText = "Password must contain at least 8 characters.";
                warning2.style.color = "red";

                isbool = false;
            }

             else if(!hasLetter || !hasNumber){

                warning2.innerText = "Password must contain latter and number";
                warning2.style.color = "red";

                isbool = false;

                }

        
    }

    //Matching Data from local storage
    function matchData(){
        
        var formInput = JSON.parse(localStorage.getItem("userDetails"))?? [];
        
        let isExisting=false;
        
        for (const [index, ele] of formInput.entries()) {  
            
        if(ele["Email Address"]== inputEmail &&  ele["Password"]== inputpass){
           
            let lastLogin=JSON.parse(localStorage.getItem("lastLogin"))?? [];
            lastLogin.pop();
            
            lastLogin.push({
                "First Name" : ele["First Name"],
                "Last Name": ele["Last Name"],
                "Email Address": ele["Email Address"],
                "Password": ele["Password"],
                "Index No": index,
                "AccCreate Date": ele["AccCreate Date"],
                "Last Updated": ele["Last Updated"]
            });

            localStorage.setItem("lastLogin",JSON.stringify(lastLogin));

            isExisting = true;
            break;
        } 
          
    }
    
    if(isExisting){
        isbool=true;

    }
    else{
         alert("This email is not registered. Please sign up before logging in!");
        isbool=false;
    }

    }

    });


