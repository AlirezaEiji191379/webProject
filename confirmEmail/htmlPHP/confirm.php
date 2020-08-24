<?php

echo "<pre>";
print_r($_POST);
echo "</pre>"


?>

<html dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>تایید ایمیل</title>
        <script src="../js/passConfScript.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/passConfStyle.css">
    </head>
    <body>
    <div id="formDiv"dir="rtl">
        <p id="warning">
            کد تاییدی برای پست الکترونیکی شما ارسال شده است!
        </p>

        <form id="myForm" >
            <div id="div1">
            <input type="text" name="code" id="code"  placeholder="کد تایید را وارد کنید">
            </div>
            <p id="clock"></p><br><br>
            <input type="submit" name="submit"  value="ارسال">
            <p><a href="" id="resendCode">کد تایید را دریافت نکردید؟</a> </p>
        </form>
    </div>
    </body>

</html>
