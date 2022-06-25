let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
let error3 = document.getElementById("error3");
let form = document.getElementsByClassName("login")[0];
let Password = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')




    function validate(){
        var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
       
        var pasWord =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        // var pasWord = /^[A-Z]{1,8}[a-z]{1,8}[0-9]{1,8}$/
    
    
        if(email.value.trim() ==""){
            error.innerHTML = "Email cannot be empty";
            error.style.color = "red";
            email.style.border = "2px solid red";
            return false;
    
        }
    
        else if(!regexp.test(email.value)){
            error.innerHTML = "Invalid";
            error.style.color = "red";
            email.style.border = "2px solid red";
            return false;
    
        }
        else {
            error.innerHTML = "";
            error.style.color ="green";
            email.style.border = "2px solid green";
            return true;  
        }
        
        }

        function passwordChecker(){
            if(pwd.value==""){
                error3.innerHTML = "Password cannot be empty";
                    error3.style.color = "red";
                    pwd.style.border = "2px solid red";
                    return false;
            
            }
            else if(!Password.test(pwd.value)){
                error3.innerHTML = "Invalid";
                error3.style.color = "red";
                pwd.style.border = "2px solid red";
                return false;
            }

            else {
                error3.innerHTML = "";
                error3.style.color ="green";
                pwd.style.border = "2px solid green";
                return true;
        
            }
        }
        email.addEventListener("input", () => {
            validate();
        })
        pwd.addEventListener("input", () => {
            passwordChecker();
        })
        form.addEventListener('submit', function (e) {

            if(!validate() ||  !passwordChecker()) {
            // prevent the form from submitting
            e.preventDefault();
        }
        
        });        



