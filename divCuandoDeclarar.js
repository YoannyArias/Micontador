$(document).ready(main);

function main()
{

var contador = 1;

$(".botonConsultar").click(function(){
   if (contador===1){
       $(".subCajaConsultar").animate({
           left: "0%"
       });
       contador = 0;
    }
    else
    {
    contador = 1;
    $(".subCajaConsultar").animate({
        left: '-500%'
    });
    }  
});
};

