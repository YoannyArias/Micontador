
var texto = document.getElementById("anuncio");


let contador = 0;
var time =  3000;
let anuncios = [
    "Declaración de Renta año gravable 2018.",
    "No tienes que ir al banco, nosotros realizamos ese trámite.",
    "Obtendras certificados de tus ingresos por Contador Público en el momento que lo requieras.",
    "Asesorias gratis en devolución Impuestos y Retención en la fuente.",
    "Te ayudamos a obtener y actualizar el RUT.",
]

function cambioAnuncio(){
    texto.innerHTML = anuncios[contador];

    if (contador < anuncios.length - 1)
    {
        contador++
    }
    else
    {
        contador = 0;
    }
    setTimeout("cambioAnuncio()",time);
}

window.onload = cambioAnuncio;