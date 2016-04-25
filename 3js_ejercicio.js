
//**********PREGUNTA #3
	var inicio=0;
	var segundo=1;
	var serie=0;
	var numero_elementos=Number(prompt("Ingrese la cantidad de Numeros"));
	function suma(n1,n2){
		var suma=0;
		suma=n1+n2;
		return suma;
	}
	var cont=0;
	document.write('<br>'+'La serie fibonacci con cantidad de numeros sera:'+ '<br>')
for(i=1;i<=numero_elementos;i++){
		cont=cont+1;
	if(cont<=numero_elementos){
		document.write('<br>'+serie);
	}
	serie=suma(inicio,segundo);
	segundo=inicio;
	inicio=serie;
		
} 
