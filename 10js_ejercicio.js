
//**********PREGUNTA #8
var Ciudades= Number(prompt("La cantidad de ciudades es: "));
var Tiendas= Number(prompt("La cantidad de tienda es: "));
var Numero_empleados=Number(prompt("El numero de empleados es: "));


var empleado=0;
var venta_total=0;
for(z=1;z<=Ciudades;z++){
	  var venta_ciudad=0;
	for(j=1;j<=Tiendas;j++){ 
		var venta_tienda=0;
		for(i=1;i<=Numero_empleados;i++){	
			var venta_empleado= Number(prompt("El total de ventas del empleado "+i+"es: "));
			venta_tienda=venta_tienda+venta_empleado;			
		}
		document.write("<br>"+"El total de ventas en la tienda "+j+" es: "+venta_tienda);
		venta_ciudad=venta_ciudad+venta_tienda;		
	}
	document.write("<br>"+"El total de ventas en la ciudad "+z+" es: "+venta_ciudad);
	venta_total=venta_total+venta_ciudad;	
}

document.write("<br>"+"El pago total sera: "+venta_total);