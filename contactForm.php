<?php


//Llamando a los campos

$nombreCompleto = $_POST['nombrecompleto'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];


//Datos para el correo

$destinatario = "yoannyaus@gmail.com";
$asunto = "Nuevo contacto";

$carta = "De $nombreCompleto \n";
$carta .= "De $email \n";
$carta .= "De $telefono \n";
$carta .= "De $ciudad \n";

?>

