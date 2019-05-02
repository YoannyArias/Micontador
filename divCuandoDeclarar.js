$(document).ready(main);

function main()
{

var contador = 1;

$(".botonConsultar").click(function(){
   if (contador===1){
       $(".widget1").animate({
           right: "120px"
       });
       contador = 0;
    }
    else
    {
    contador = 1;
    $(".widget1").animate({
        right: '-120%'
    });
    }  
});
};

