
//**********PREGUNTA #8
	var numero_ventas=Number(prompt("El numero de ventas durante el dia es: "));
	var mayores_mil=0;
	var quinientos_mil=0;
	var menores_quinientos=0;
for(i=1;i<=numero_ventas;i++){
	var venta=Number(prompt("La venta "+i+" es: "));
	if(venta<=500){
		menores_quinientos=menores_quinientos+1;
	}
	if(venta>500&&venta<=1000){
		quinientos_mil=quinientos_mil+1;
	}
	if(venta>1000){
		mayores_mil=mayores_mil+1;
	}
}
	
	

document.write("<br>"+"El total de ventas menores a 500 es: "+ menores_quinientos);
document.write("<br>"+"El total de ventas mayores a 500 y menores a 1000 es: "+ quinientos_mil);
document.write("<br>"+"El total de ventas mayores a 1000 es: "+ mayores_mil);
