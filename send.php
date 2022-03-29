<?php
$name = $_POST["name"];
$mail = $_POST["mail"];
$tel = $_POST["tel"];
$message = $_POST["message"];

$to = "lytmarina@mail.ru";
$from = "lytmarina@mail.ru";
$subject = "Сообщение с сайта";
	
$mail_to_myemail = "Здравствуйте!
Данные отправленные через форму на сайте:
--
Имя: {$name}
Телефон: {$tel}
Почта: {$mail}
Сообщение: {$message}
--";
	
$headers = "From: $from \r\n";
	
if(mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8')) {
    echo "success";
} else {
    echo "error";
}
