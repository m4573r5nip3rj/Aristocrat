<?php
$email_to = "mail2gahlot@gmail.com";
$name = $_POST["fname"];
$email_from = $_POST["email"];
$message = $_POST["message"];
$email_subject = $_POST["subject"];
$headers = "From: " . $email_from . "\n";
$headers .= "Reply-To: " . $email_from . "\n";

$message = "Name: ". $name . "\r\nMessage: " . $message;

ini_set("sendmail_from", $email_from);
$sent = mail($email_to, $email_subject, $message, $headers, "-f" .$email_from);
if ($sent)
{
header("Location: http://aristocratenterprises.com");
} else {
echo "There has been an error sending your comments. Please try later.";
}
?>