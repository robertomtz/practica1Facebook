<?php
if ($_POST && isset($_POST['mensaje']) && isset($_POST['time'])){
  require "connect.php";
  $comentario = $_POST['mensaje'];
  $time = $_POST['time'];
  $query = "INSERT INTO `p2_labweb`.`Comentarios` (`id`, `usuario`, `comentario`, `timestamp`) VALUES ('0', 'Roberto Mtz', '$comentario', '$time');";
  $result = mysqli_query($connection, $query);
  if (!$result){
    echo "Error 400, no se pudo agregar a la base de datos";
  }
  else{
    http_response_code(200);
  }
}else{
	http_response_code(400);
}
?>
