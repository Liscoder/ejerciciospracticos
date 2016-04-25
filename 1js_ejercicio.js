
//**********PREGUNTA #1

var suma= 0;
var promedio=0;
numero_personas=Number(prompt("Ingrese el numero de personas"));
for(i=1;i<=numero_personas;i++){
	var numero=0;
	numero = Number(prompt("Please enter your number "+i));
	suma=suma+numero;
} 
promedio=suma/numero_personas;
document.write(promedio);

