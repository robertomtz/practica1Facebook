<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'p2_labweb';
$connection = new mysqli($dbhost, $dbuser, $dbpass);
if (!mysqli_select_db($connection, $dbname))
{
  echo "Error: " . mysqli_error();
}
?>
