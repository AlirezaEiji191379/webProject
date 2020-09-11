<?php

if(filter_var($_POST["email"],FILTER_VALIDATE_EMAIL)==false){
    header("location: Register.php?error=4");
}
session_start();
$_SESSION["username"]=$_POST["username"];
$_SESSION["password"]=$_POST["password"];
$_SESSION["email"]=$_POST["email"];
$_SESSION["firstName"]=$_POST["firstName"];
$_SESSION["lastName"]=$_POST["lastName"];
$emailCode=rand(100000,1000000);
$text="your email code is $emailCode";
mail($_SESSION["email"],"email confirmation code",$text);
$_SESSION["emailCode"]=$emailCode;
$_SESSION["errors"]=0;

setcookie(session_name(),session_id(),time()+300,"/");

header("location: ../emailConfirm/emailConfirmation.php");


