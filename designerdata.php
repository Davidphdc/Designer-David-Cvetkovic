<?php

$fname = ($_POST["fname"]);
$lname = ($_POST["lname"]);
$email = ($_POST["email"]);
$message = ($_POST["message"]);

$hostname="localhost";
$username="davidcve_DavidCvetkovic";
$password="dcF!SH4711";
$dbname="davidcve_designerdata";
$usertable="ContactForm";

$link = mysqli_connect($hostname, $username, $password, $dbname);

if($link === false) {
  die("ERROR: Could Not Connect" . mysqli_connect_error());
}

// $sql = "INSERT INTO $usertable (fname, lname, email, message) VALUES ('$fname','$lname', '$email', '$message')";

// if(mysqli_connect($link, $sql)) {
// echo "enquiry submitted successfully.";
// } else {
//   echo "ERROR: enquiry submitted un-successfully." .mysqli_error($link);
// }
// mysqli_close($link);

$mailheader = "From:".$fname."<".$email.">\r\n";

$recipient = "dc@davidcvetkovic.com";

mail($recipient, $fname, $lname, $email, $message, $mailheader) or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
        <p class="back">Go back to the <a href="index.html">homepage</a>.</p>
        
    </div>
</body>
</html>
';
?>