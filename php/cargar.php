<?php
require "connect.php";
$query = "SELECT c.usuario, c.comentario, c.timestamp FROM Comentarios c";
$result = mysqli_query($connection, $query);
$resp = array();

while ($x = mysqli_fetch_assoc($result)){
	array_push($resp, $x);
}

echo json_encode($resp);

?>
