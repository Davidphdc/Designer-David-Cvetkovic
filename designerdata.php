<?php

$fname = ($_POST["fname"]);
$lname = ($_POST["lname"]);
$email = ($_POST["email"]);
$message = ($_POST["message"]);

$hostname="Localhost";
$username="DavidCvetkovic";
$password="dcF!SH4711";
$dbname="davidcve_designerdata";
$usertable="ContactForm";

$link = mysqli_connect($hostname, $username, $password, $dbname);

if($link === false) {
  die("ERROR: Could Not Connect" . mysqli_connect_error());
}

$sql = "INSERT INTO $usertable (fname, lname, email, message) VALUES ('$fname','$lname', '$email', '$message')";

if(mysqli_connect($link, $sql)) {
echo "enquiry submitted successfully.";
} else {
  echo "ERROR: enquiry submitted un-successfully." .mysqli_error($link);
}
mysqli_close($link);
?>