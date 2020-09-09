function checkValidUsername() {
    let usernameInput=document.getElementById("usernameInput");
    let usernameError=document.getElementById("usernameError");
    let usernameValue=usernameInput.value;
    let regexErrorMessage="نام کاربری فقط شامل حروف انگلیسی و اعداد است!";
    let numericErrorMessage="نام کاربری باید حداقل 8 کاراکتر داشته باشد!";
    let correctUsername="نام کاربری معتبر است!";
    if(usernameValue!==""){
        usernameInput.dir="ltr";
    }else {
        usernameInput.dir="rtl";
    }
    const reg=RegExp("[^A-Za-z0-9]");
    if(reg.test(usernameValue)==false){
        if(usernameValue.length<8){
            usernameError.innerHTML=numericErrorMessage;
            usernameError.style.color="red";
            return  false;
        }else{
            usernameError.innerHTML=correctUsername;
            usernameError.style.color="green";
            return false;
        }
    }else{
        usernameError.innerHTML = regexErrorMessage;
        usernameError.style.color = "red";
        return false;
    }
}

function checkValidPassword(){
    let passwordInput=document.getElementById("passwordInput");
    let repeatInput=document.getElementById("confirmInput");
    let passwordError=document.getElementById("passwordError");
    let regexErrorMessage="رمز عبور باید شامل حروف انگلیسی اعداد و نشانه ها باشد!";
    let numericError="رمز عبور باید حداقل 6 حرف باشد!";
    let notEqualError="رمز عبور های وارد شده یکسان نیستند!";
    let correctPassword="رمز عبور معتبر است!";
    let passwordValue=passwordInput.value;
    if(passwordValue!==""){
        passwordInput.dir="ltr";
    }else {
        passwordInput.dir="rtl";
    }
    if(repeatInput.value!==""){
        repeatInput.dir="ltr";
    }else {
        repeatInput.dir="rtl";
    }
    const regex=RegExp("[^a-zA-Z0-9@#$%*_=+\\|/]");
    if(regex.test(passwordValue)==false) {
        if (passwordValue.length < 6) {
            passwordError.innerHTML = numericError;
            passwordError.style.color = "red";
        } else {
            if (repeatInput.value !== passwordValue) {
                passwordError.innerHTML = notEqualError;
                passwordError.style.color = "red";
                return;
            }
            passwordError.innerHTML = correctPassword;
            passwordError.style.color = "green";
        }
    }else {
        passwordError.innerHTML=regexErrorMessage;
        passwordError.style.color="red";
    }
}

function checkValidEmail() {
    let emailInput=document.getElementById("emailInput");
    let emailValue=emailInput.value;
    if(emailValue!==""){
        emailInput.dir="ltr";
    }else {
        emailInput.dir="rtl";
    }

}
function checkValidName(input) {
    let inputName;
    let anotherInput;
    if(input==="firstNameInput"){
        inputName=document.getElementById("firstNameInput");
        anotherInput=document.getElementById("lastNameInput");
    }else if(input==="lastNameInput"){
        anotherInput=document.getElementById("firstNameInput");
        inputName=document.getElementById("lastNameInput");
    }
    let nameErrorMessage="لطفا نام و نام خانوادگی معتبر وارد کنید!";
    let nameError=document.getElementById("nameError");
    const regex=RegExp("[^A-Za-zا-ی ]");
    let nameValue=inputName.value;
    if(regex.test(nameValue)==false){
        if(regex.test(anotherInput.value)==false){
            nameError.innerHTML="";
        }
        else{
            nameError.innerHTML=nameErrorMessage;
            nameError.style.color="red";
        }
    }else{
        nameError.innerHTML=nameErrorMessage;
        nameError.style.color="red";
    }
}