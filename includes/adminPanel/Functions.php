<?php


function checkNotEmptyForm($arr){
    foreach ($arr as $key=>$value){
        if(empty($arr[$key])){
            return false;
        }
    }
    return true;
}

function checkNotEmptyFile($filename){
    if(empty($_FILES[$filename]["name"])){
        return false;
    }
    return true;
}

function compareDates($date,$start,$end,$now){
    $startTime=strtotime($date." ".$start);
    if($now==false){
        $endTime=strtotime($date." ".$end);
        if($startTime<$endTime){
            return true;
        }else return  false;

    }else{
        if($startTime>time()){
            return  true;
        }else return  false;
    }
}

function returnFormattedDate($date,$time){
    return strtotime($date." ".$time);
}

function saveToSession($start,$end){
    if(session_status()==PHP_SESSION_NONE){
        session_start();
    }
    $_SESSION["fname"]=$_POST["fname"];
    $_SESSION["points"]=$_POST["points"];
    $_SESSION["time"]=$_POST["time"];
    $_SESSION["startTime"]=$start;
    $_SESSION["endTime"]=$end;
    $_SESSION["fileDir"]= ini_get("upload_tmp_dir")."/upload/".$_FILES["myFile"]["name"];
}

function uploadFile(){
    $targetDir=ini_get("upload_tmp_dir");
    $target_File=$targetDir."/upload/".$_FILES["myFile"]["name"];
    $pdfFileType = strtolower(pathinfo($target_File,PATHINFO_EXTENSION));
    if($_FILES["myFile"]["size"]>40000000){
        header("location: ../../Pages/adminPanel/createExam.php?error=fileSize");
        die();
    }
    if($pdfFileType!="pdf"){
        header("location: ../../Pages/adminPanel/createExam.php?error=fileExt");
        die();
    }
    if(move_uploaded_file($_FILES["myFile"]["tmp_name"],$target_File)==false){
        header("location: ../../Pages/adminPanel/createExam.php?error=fileCancel");
        die();
    }
}

