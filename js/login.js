let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function validate(){
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    var pasWord = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color ="green";
        // return true;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        email.style.border = "2px solid red";
        // return false;
    }
    if(pasWord.test(pwd.value)){
        error3.innerHTML = "Valid";
        error3.style.color ="green";
        return true;

    }
    else{
            error3.innerHTML = "Invalid";
            error3.style.color = "red";
            pwd.style.border = "2px solid red";
            return false


}
}