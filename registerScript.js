let validation=true;
function checkValidUsername() {
    let usernameInput=document.getElementById("username");
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
            validation=false;
        }else{
            usernameError.innerHTML=correctUsername;
            usernameError.style.color="green";
            validation=true;
        }
    }else{
            usernameError.innerHTML = regexErrorMessage;
            usernameError.style.color = "red";
            validation=false;
    }
}
function checkValidPassword(){
    let passwordInput=document.getElementById("password");
    let repeatInput=document.getElementById("repeat");
    let passwordError=document.getElementById("passwordError");
    let regexErrorMessage="رمز عبور باید شامل حروف انگلیسی اعداد و نشانه ها باشد!";
    let numericError="رمز عبور باید حداقل 6 حرف باشد!";
    let notEqualError="رمز عبور های وارد شده یکسان نیستند!";
    let correctPassword="رمز عبور معتبر است!";
    let passwordValue=passwordInput.value;
    const regex=RegExp("[^a-zA-Z0-9@#$%*_=+\\|/]");
    if(regex.test(passwordValue)==false) {
        if (passwordValue.length < 6) {
            passwordError.innerHTML = numericError;
            passwordError.style.color = "red";
            validation = false;
        } else {
            if (repeatInput.value !== passwordValue) {
                passwordError.innerHTML = notEqualError;
                passwordError.style.color = "red";
                validation = false;
                return;
            }
            passwordError.innerHTML = correctPassword;
            passwordError.style.color = "green";
            validation = true;
        }
    }else {
        passwordError.innerHTML=regexErrorMessage;
        passwordError.style.color="red";
        validation=false;
    }
}
function checkValidName(input) {
    let inputName;
    if(input==="firstName"){
        inputName=document.getElementById("firstName");
    }else if(input==="lastName"){
        inputName=document.getElementById("lastName");
    }
    let nameErrorMessage="لطفا نام و نام خانوادگی معتبر وارد کنید!";
    let nameError=document.getElementById("nameError");
    const regex=RegExp("[^A-Za-zا-ی]");
    let nameValue=inputName.value;
    if(regex.test(nameValue)==false){
        nameError.innerHTML="";
    }else{
        nameError.innerHTML=nameErrorMessage;
        nameError.style.color="red";
        validation=false;
    }
}
//// این پایینیه کار داره!
function checkNotEmpty() {
    let username=document.getElementById("username").value.trim();
    let password=document.getElementById("password").value.trim();
    let repeatPassword=document.getElementById("repeat").value.trim();
    let email=document.getElementById("email").value.trim();
    let firstName=document.getElementById("firstName").value.trim();
    let lastName=document.getElementById("lastName").value.trim();
    let nameError=document.getElementById("nameError");
    let form=document.getElementById("myForm");
    if(username=="" || password=="" || repeatPassword=="" || email=="" || firstName=="" || lastName==""){
       validation=false;
           form.reset();
           nameError.innerHTML="لطفا همه فیلد ها را پر کنید!";
           nameError.style.color="red";
       return;
   }else {
        form.action="confrim.php";
        nameError.innerHTML="";
    }
}








