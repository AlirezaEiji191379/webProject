<?php
include_once("../DBInformation/dbInf.php");

if(isset($_GET["field"])){
    $mysql=new mysqli(host,username,password,dbname);


    if($_GET["field"]==="username"){

    }
    elseif ($_GET["field"]==="email"){
        echo "hello email";
    }
}



