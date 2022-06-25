let email = document.getElementById("email");
// let pwd = document.getElementById("pwd");
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

function validate(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var phNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pasWord =/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    // var pasWord = /^[A-Z]{1,8}[a-z]{1,8}[0-9]{1,8}$/

    
    
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        email.style.border = "2px solid green";
        // return true;

      
    }
    else if{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        email.style.border = "2px solid red";
        // return false;

    }
    else if(phNum.test(phnum.value)){
        error2.innerHTML = "Valid";
        error2.style.color ="green";
        // return true;

    }
    else if{
            error2.innerHTML = "Invalid";
            error2.style.color = "red";
            phnum.style.border = "2px solid red";
            // return false
    }
    // if(pasWord.test(pwd.value)){
    //     error3.innerHTML = "Valid";
    //     error3.style.color ="green";
    //     // return true;

    // }
    // else{
    //         error3.innerHTML = "Invalid";
    //         error3.style.color = "red";
    //         pwd.style.border = "2px solid red";
    //         // return false
    // } 
    // if(pasWord.test(pwd2.value)){
    //     error4.innerHTML = "Valid";
    //     error4.style.color ="green";
    //     return true;

    // }
    // else{
    //         error4.innerHTML = "Invalid";
    //         error4.style.color = "red";
    //         pwd2.style.border = "2px solid red";
    //         return false
    // } 
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

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});

// confirm password checking

// function check() {
//     if(password.value ===
//             pwd2.value) {
//         document.getElementById('message').innerHTML = "match";
//     } else {
//         document.getElementById('message').innerHTML = "no match";
//     }
// }