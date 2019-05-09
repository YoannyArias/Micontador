
    <?php

//Llamando a los campos
$destino = "yoannyaus@gmail.com";
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];
//Datos para el correo
$contenido = "Nombre: " .$nombre ."\nEmail:" .$email ."\ntelefono:" .$telefono ."\nciudad:" .$ciudad ;

mail($destino, "Contacto" , $contenido);

?>



<!-- // $nombreCompleto = $_POST['nombrecompleto'];
// $email = $_POST['email'];
// $telefono = $_POST['telefono'];
// $ciudad = $_POST['ciudad'];




// $destinatario = "yoannyaus@gmail.com";
// $asunto = "Nuevo contacto";

// $carta = "De $nombreCompleto \n";
// $carta .= "De $email \n";
// $carta .= "De $telefono \n";
// $carta .= "De $ciudad \n"; -->



