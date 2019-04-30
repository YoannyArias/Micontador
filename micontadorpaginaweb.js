$(document).ready(main);

function main()
{

var contador = 1;

$(".menuBar").click(function(){
   if (contador===1){
       $("nav").animate({
           left: "19"
       });
       contador = 0;
    }
    else
    {
    contador = 1;
    $("nav").animate({
        left: '-100%'
    });
    }  
});
};

