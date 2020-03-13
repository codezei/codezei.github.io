<?php

$mail_to = 'london@neogenos.com';

if($name = trim(htmlspecialchars($_POST['name']))){
$message .= 
'From '.$name;}

if($mes = trim(htmlspecialchars($_POST['mess']))){
  $message .=
  '
  Message: ' .$mes;}

if($email = trim(htmlspecialchars($_POST['email']))){
$message .=
'
E-mail: ' .$email;}


if($form_id = trim(htmlspecialchars($_POST['form_id']))){
$message .=
'
Form: ' .$form_id;}

$message = wordwrap($message, 70, "\r\n");

if (mail($mail_to, 'Message from stonebush', $message)){
    echo json_encode('ok');
}else{
    echo json_encode('err');
    
}

?>