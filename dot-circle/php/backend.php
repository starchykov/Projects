<?php
//include 'connection.php';

$email_to = "anar.m@dot-circle.com";
//$email_to = "zeesnippi@gmail.com";
$email_subject = "Subscribers dot-circle.com";
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$pattern = [
    'email' => '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
];

/**
 * Validate input values
 * @param $name
 * @param $value
 * @return int
 */
function checkRegExp($name, $value)
{
    global $pattern;
    return preg_match($pattern[$name], $value);
}

if (!checkRegExp('email', $email)) {
    $response['error']['email'] = 'Invalid email';
}


if (!$response['error']) {
$email_message = "I want to subscribe for mailing, my contacts info below:\n\n";


function clean_string($string)
{
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

$email_message .= "First Name: " . clean_string($first_name) . "\n";
$email_message .= "Last Name: " . clean_string($last_name) . "\n";
$email_message .= "Email: " . clean_string($email) . "\n";
$email_message .= "Phone: " . clean_string($phone) . "\n";
$email_message .= "Message: " . clean_string($message) . "\n";

// create email headers
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
header('Location: ../index.html');
}
$response["success"] = true;

echo json_encode($response);
