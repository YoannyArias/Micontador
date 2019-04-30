    var fechasDeclaracion = [
    "17 de octubre de 2019",	"17 de octubre de 2019",	"16 de octubre de 2019",	"16 de octubre de 2019",	"15 de octubre de 2019",	"15 de octubre de 2019",	"11 de octubre de 2019",	"11 de octubre de 2019",	"10 de octubre de 2019",	"10 de octubre de 2019",	"9 de octubre de 2019",	"9 de octubre de 2019",	"8 de octubre de 2019",	"8 de octubre de 2019",	"7 de octubre de 2019",	"7 de octubre de 2019",	"4 de octubre de 2019",	"4 de octubre de 2019",	"3 de octubre de 2019",	"3 de octubre de 2019",	"2 de octubre de 2019",	"2 de octubre de 2019",	"1 de octubre de 2019",	"1 de octubre de 2019",	"30 de septiembre de 2019",	"30 de septiembre de 2019",	"27 de septiembre de 2019",	"27 de septiembre de 2019",	"26 de septiembre de 2019",	"26 de septiembre de 2019",	"25 de septiembre de 2019",	"25 de septiembre de 2019",	"24 de septiembre de 2019",	"24 de septiembre de 2019",	"23 de septiembre de 2019",	"23 de septiembre de 2019",	"20 de septiembre de 2019",	"20 de septiembre de 2019",	"19 de septiembre de 2019",	"19 de septiembre de 2019",	"18 de septiembre de 2019",	"18 de septiembre de 2019",	"17 de septiembre de 2019",	"17 de septiembre de 2019",	"16 de septiembre de 2019",	"16 de septiembre de 2019",	"13 de septiembre de 2019",	"13 de septiembre de 2019",	"12 de septiembre de 2019",	"12 de septiembre de 2019",	"11 de septiembre de 2019",	"11 de septiembre de 2019",	"10 de septiembre de 2019",	"10 de septiembre de 2019",	"9 de septiembre de 2019",	"9 de septiembre de 2019",	"6 de septiembre de 2019",	"6 de septiembre de 2019",	"5 de septiembre de 2019",	"5 de septiembre de 2019",	"4 de septiembre de 2019",	"4 de septiembre de 2019",	"3 de septiembre de 2019",	"3 de septiembre de 2019",	"2 de septiembre de 2019",	"2 de septiembre de 2019",	"30 de agosto de 2019",	"30 de agosto de 2019",	"29 de agosto de 2019",	"29 de agosto de 2019",	"28 de agosto de 2019",	"28 de agosto de 2019",	"27 de agosto de 2019",	"27 de agosto de 2019",	"26 de agosto de 2019",	"26 de agosto de 2019",	"23 de agosto de 2019",	"23 de agosto de 2019",	"22 de agosto de 2019",	"22 de agosto de 2019",	"21 de agosto de 2019",	"21 de agosto de 2019",	"20 de agosto de 2019",	"20 de agosto de 2019",	"16 de agosto de 2019",	"16 de agosto de 2019",	"15 de agosto de 2019",	"15 de agosto de 2019",	"14 de agosto de 2019",	"14 de agosto de 2019",	"13 de agosto de 2019",	"13 de agosto de 2019",	"12 de agosto de 2019",	"12 de agosto de 2019",	"9 de agosto de 2019",	"9 de agosto de 2019",	"8 de agosto de 2019",	"8 de agosto de 2019",	"6 de agosto de 2019",	"6 de agosto de 2019",
    ];
    
    function consultaFechaDeclaracion()
    {
      var digita = document.getElementById("textConsultar");
      var cedula = digita.value;
      console.log(digita);
      var extra = cedula.length;
      var subString = parseInt(cedula.substring(extra, extra-2));
      console.log(subString);
    
      var digitaTexto = isNaN(subString); //Se valida si el usuario ingresó texto o un número.
    
        if (isNaN(cedula)==true)
        {
    
        //   declaracion.innerHTML = "No has digitado un número valido ";
        console.log("Hola");
        }
        else
        {
          if (subString==0)
          {
          subString = 100;
          var debesdeclarar = fechasDeclaracion[subString-1];
        //   declaracion.innerHTML = `Tu fecha límite para declarar es el <strong> ${debesdeclarar} </strong>`;
        console.log("Hola2");
          }
          else
          {
          var debesdeclarar = fechasDeclaracion[subString-1];
        //   declaracion.innerHTML = `Tu fecha límite para declarar es el <strong> ${debesdeclarar} </strong>`;
        console.log("Hola3");
          }
        }
    }