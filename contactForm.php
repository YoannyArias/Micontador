
    <?php

require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ($_POST){

//Llamando a los campos
$destinatario = "yoannyaus@gmail.com";

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];



// Datos de la cuenta de correo utilizada para enviar v�a SMTP
$smtpHost = "mail.mipropiocontador.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "info@mipropiocontador.com";  // Mi cuenta de correo
$smtpClave = "Jo@20212223";  // Mi contrase�a


$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;


$mail->From = $email; // Email desde donde env�o el correo.
$mail->FromName = $nombre;
$mail->AddAddress($destinatario); // Esta es la direcci�n a donde enviamos los datos del formulario

$mail->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<html> 

<body> 

<h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

<p>Informacion enviada por el usuario de la web:</p>

<p>nombre: {$nombre}</p>

<p>email: {$email}</p>

<p>telefono: {$telefono}</p>

<p>asunto: {$ciudad}</p>

</body> 

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    header("location:http://www.mipropiocontador.com/") ;
} else {
    echo "Ocurrió un error inesperado.";
    exit();
}
} else{
    echo "No hay datos para procesar";
    exit();
}
?>

<!-- // mio


//Datos para el correo
$contenido = "Nombre: " .$nombre ."\nEmail:" .$email ."\ntelefono:" .$telefono ."\nciudad:" .$ciudad ;

mail($destino, "Contacto" , $contenido); -->

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



