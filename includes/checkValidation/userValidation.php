<?php
//for validating that user is logged in or not!
if(session_status()==PHP_SESSION_NONE) {
    session_start();
}
if(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"]==1){
    if(isset($_SESSION["type"])===true && $_SESSION["type"]=="Admin"){
        header("location: ../../Pages/adminPanel/adminPanel.php");
    }
}
else{
    session_destroy();
    header("location: ../../Pages/loginPanel/login.php");
}
