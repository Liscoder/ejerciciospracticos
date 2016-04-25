
//**********PREGUNTA #2
	var menores_cero=0;
	var mayores_cero=0;
var cantidad=Number(prompt("Ingrese la cantidad de Numeros"));
for(i=1;i<=cantidad;i++){
	numero = Number(prompt("Please enter your number "+i));
	if(numero<=0){
		menores_cero=menores_cero+1;
	}else{
		mayores_cero=mayores_cero+1;
	}
} 
document.write('<br>'+"La cantidad de numeros a cero es: "+ mayores_cero);
document.write('<br>'+"la cantidad de numeros mayores a cero: "+menores_cero);

