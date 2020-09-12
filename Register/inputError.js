function checkValidUsername() {
    let usernameInput=document.getElementById("usernameInput");
    let usernameError=document.getElementById("usernameError");
    let usernameValue=usernameInput.value;
    let regexErrorMessage="نام کاربری فقط شامل حروف انگلیسی و اعداد است!";
    let numericErrorMessage="نام کاربری باید حداقل 8 کاراکتر داشته باشد!";
    let notAlpha="نام کاربری باید شامل حرف انگلیسی باشد!";
    const reg=RegExp("[^A-Za-z0-9]");
    if(reg.test(usernameValue)==false){
        if(usernameValue.length<8){
            usernameError.innerHTML=numericErrorMessage;
            usernameError.style.color="red";
            return  false;
        }else{
            let pattern=RegExp("[A-Za-z]");
            if(usernameValue.match(pattern)===null){
                usernameError.innerHTML=notAlpha;
                usernameError.style.color="red";
                return false;
            }

            let xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200){
                    usernameError.innerHTML=this.responseText;
                }
            };
            xhttp.open("GET","checkFromDB.php?username="+usernameValue,true);
            xhttp.send();
            if(usernameError.innerHTML==="نام کاربری معتبر است!"){
                return true;
            }else{
                return false;
            }
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
    const regex=RegExp("[^a-zA-Z0-9@#$%*_=+\\|/]");
    if(regex.test(passwordValue)==false) {
        if (passwordValue.length < 6) {
            passwordError.innerHTML = numericError;
            passwordError.style.color = "red";
            return false;
        } else {
            if (repeatInput.value !== passwordValue) {
                passwordError.innerHTML = notEqualError;
                passwordError.style.color = "red";
                return false;
            }
            passwordError.innerHTML = correctPassword;
            passwordError.style.color = "green";
            return  true;
        }
    }else {
        passwordError.innerHTML=regexErrorMessage;
        passwordError.style.color="red";
        return  false;
    }
}

function checkValidEmail() {
    let emailInput = document.getElementById("emailInput");
    let emailValue = emailInput.value;
    let emailError = document.getElementById("emailError");
    emailError.innerHTML=emailInput.value;
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            emailError.innerHTML=this.responseText;
        }
    };
    xhttp.open("GET","checkFromDB.php?email="+emailValue,true);
    xhttp.send();
    if(emailError.innerHTML===""){
        return true;
    }else{
        return false;
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
            return true;
        }
        else{
            nameError.innerHTML=nameErrorMessage;
            nameError.style.color="red";
            return false;
        }
    }else{
        nameError.innerHTML=nameErrorMessage;
        nameError.style.color="red";
        return false;
    }
}

function checkValidPhoneNumber() {
    let phoneNumberInput=document.getElementById("phoneNumberInput");
    let phoneNumberValue=phoneNumberInput.value;
    let phoneNumberError=document.getElementById("phoneError");
    if(phoneNumberValue===""){
        phoneNumberInput.dir="rtl";
    }else{
        phoneNumberInput.dir="ltr";
    }
    const regex=RegExp("09[0-9]{9}");
    if(regex.test(phoneNumberValue)==false){
        phoneNumberError.innerHTML="لطفا شماره تلفن معتبر وارد کنید!";
        phoneNumberError.style.color="red";
    }else{
         phoneNumberError.innerHTML="";
        let xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                phoneNumberError.innerHTML=this.responseText;
            }
        };
        xhttp.open("GET","checkFromDB.php?phone="+phoneNumberValue,true);
        xhttp.send();
        if(phoneNumberError.innerHTML=="این شماره معتبر است!"){
            return true;
        }else{
            return  false;
        }
    }
}

function submitCode() {
    let username=document.getElementById("usernameInput").value.trim();
    let password=document.getElementById("passwordInput").value.trim();
    let repeat=document.getElementById("confirmInput").value.trim();
    let email=document.getElementById("emailInput").value.trim();
    let firstName=document.getElementById("firstNameInput").value.trim();
    let lastName=document.getElementById("lastNameInput").value.trim();
    let form=document.getElementById("myForm");

    if(username==="" || password==="" || repeat==="" || email==="" || firstName===""|| lastName===""){
        form.action="Register.php?error=1";
        return;
    }
    if(checkValidUsername()===true){
        if(checkValidPassword()===true){
            if(checkValidName("firstNameInput")==true){
                if(checkValidName("lastNameInput")===true){
                    if(checkValidPhoneNumber()===true){
                        if(checkValidEmail()===true){
                            form.action="sendEmailCode.php";
                        }else{
                            form.action="Register.php?error=2";
                        }
                    }else{
                        form.action="Register.php?error=2";
                    }
                }else{
                    form.action="Register.php?error=2";
                }
            }else{
                form.action="Register.php?error=2";
            }
        }else{
            form.action="Register.php?error=2";
        }
    }else{
        form.action="Register.php?error=2";
    }
}

function changeDir(id) {
    let inputName=document.getElementById(id);
    if(inputName.value===""){
        inputName.dir="rtl";
    }else{
        inputName.dir="ltr";
    }
}
