'use strict'

// creación de fichero txt (modulo 'fs' de NODE)
const fs = require ('fs');

//fecha 
// agregar cero delante de la hora y minutos
function addZero(i) {
	if (i < 10) {
	  i = "0" + i;
	}
	return i;
  }
// variable fecha
var date = new Date ();
var date_det = date.getDate()+"/"+ (date.getMonth()+1)+"/"+ date.getFullYear()+","+ addZero(date.getHours())+":"+ addZero (date.getMinutes());


//Proceso intro codigo - proceso directo solo codigo
process.stdin.resume()
console.log ('entra tú codigo');
process.stdin.on ('data', function (data){
	//process.stdout.write (data) // proceso de salida en consola (muestra en consola código introducido)

//Proceso de lectura JSON
	fs.readFile ('lista.json','utf8',function(err,data_b){
    	var lista = JSON.parse (data_b);
    	var bucle = lista.empleats;
    
   //bucle for
	    	for (var i = 0; i < bucle.length; i++) {

	    	var codEmpl= lista.empleats[i].codigo;
	    	var nomEmpl= lista.empleats[i].nombre;


	//busqueda empleado

				if (data == codEmpl){
					var reg = "\n" + nomEmpl+","+date_det;
					
					console.log (reg);
					
					fs.appendFile ('registro.txt', reg ,(error) =>{
						if(error){
							throw error;
						}
						console.log('registro OK');
						
					});
				}


				//else {console.log("vuelve a introducir un código");}
				
			};

	});
});
