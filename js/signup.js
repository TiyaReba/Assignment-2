let email = document.getElementById("email");
let form = document.getElementsByClassName("login")[0];
let pwd2 = document.getElementById("pwd2");
let phnum = document.getElementById("phnum");
let error = document.getElementById("error");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");

// password strength meter
let timeout;
let password = document.getElementById('pwd');
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')

// checking username
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

// checking phone no
function validatePhNumb (){
    var phNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phnum.value.trim()==""){
            error2.innerHTML = "Phone No cannot be empty";
            error2.style.color = "red";
            phnum.style.border = "2px solid red";
            return false;
    }
   
    else if(!phNum.test(phnum.value)){
            error2.innerHTML = "Invalid";
            error2.style.color = "red";
            phnum.style.border = "2px solid red";
            return false;
    }
    else {
        error2.innerHTML = "";
        error2.style.color ="green";
        phnum.style.border = "2px solid green";
        return true;

    }
    
}
function passwordChecker(){
    if(password.value==""){
        error3.innerHTML = "Password cannot be empty";
            error3.style.color = "red";
            password.style.border = "2px solid red";
            return false;
    
    }
    else {
        error3.innerHTML = "";
        error3.style.color ="green";
        password.style.border = "2px solid green";
        return true;

    }
}

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength
   
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'Orange'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }

}

email.addEventListener("input", () => {
    validate();
})

phnum.addEventListener("input", () => {
    validatePhNumb();
})

pwd2.addEventListener("input", () => {
   check();
})
// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    StrengthChecker(password.value);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});
   
    form.addEventListener('submit', function (e) {

        if(!validate() || !validatePhNumb() || !passwordChecker() ||!check()){
        // prevent the form from submitting
        e.preventDefault();
    }
    
    });
    
    

function check() {
    if(password.value ===
            pwd2.value) {
            error4.innerHTML = "";
            error4.style.color = "green";
            pwd2.style.border = "2px solid green";
            return true;
    
    }
    else {
        error4.innerHTML = "Password does not match";
        error4.style.color ="red";
        password.style.border="2px solid red";
        pwd2.style.border = "2px solid red";
        return false;

    }
}