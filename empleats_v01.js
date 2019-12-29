'use strict'
//codigo barras o proceso indirecto archivo + codigo
//var params = process.argv.slice(2);


// creación de fichero txt (modulo 'fs' de NODE)
const fs = require ('fs');


//Objeto o lista de empleados
/*var empleats = {
juan:{nombre:"juan",codigo:45,depto:"almacen"},
jon:{nombre:"jon",codigo:78,depto:"admin"},
loco:{nombre:"loco",codigo:12,depto:"inform"},
nacho:{nombre:"nacho",codigo:18,depto:"inform"}
};*/

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

//busqueda empleado

		if ( data == lista.empleats[0].codigo) {
		
			var cod_juan = "\n" + lista.empleats[0].nombre+","+date_det;
			
			console.log (cod_juan);
			
			fs.appendFile ('registro.txt', cod_juan ,(error) =>{
				if(error){
					throw error;
				}
				console.log('registro OK');
				
			});
		}

		if (data  == lista.empleats[1].codigo) {
			
			var cod_jon = "\n" + lista.empleats[1].codigo+","+date_det;
			
			console.log (cod_jon);
			
			fs.appendFile ('registro.txt', cod_jon ,(error) =>{
				if(error){
					throw error;
				}
				console.log('registro ok');
				
			});
		}

		if (data  == lista.empleats[2].codigo) {
			

			var cod_loco = "\n" + lista.empleats[2].codigo+","+date_det;
			
			console.log (cod_loco);
		
		fs.appendFile ('registro.txt', cod_loco ,(error) =>{
			if(error){
				throw error;
			}
			console.log('registro ok');
			
		});
		}

		if (data  == lista.empleats[3].codigo) {
			
			var cod_nacho = "\n" + lista.empleats[3].codigo+","+date_det;
			
			console.log (cod_nacho);
		
		fs.appendFile ('registro.txt', cod_nacho ,(error) =>{
			if(error){
				throw error;
			}
			console.log('registro ok');
			
		});
		}

		
		if (data != lista.empleats[0].codigo && data != lista.empleats[1].codigo &&
 data != lista.empleats[2].codigo && data != lista.empleats[3].codigo)
		{
			console.log("vuelve a introducir un código");
			
		};

	});
});
