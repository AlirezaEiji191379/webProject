<?php

if(session_status()==PHP_SESSION_NONE) {
    session_start();
}


function makeSafe($input){
    return stripcslashes(htmlspecialchars(trim($input)));
}

$username=makeSafe($_SESSION["username"]);



if(isset($_COOKIE[session_name()])){
    setcookie(session_name(),"",time()-3600,"/");
    session_destroy();
}





header("location: login.php?register=1");




