
//**********PREGUNTA #5
	var ahorro_total=0;
	var ahorro_mensual=0;

for(i=1;i<=12;i++){
	deposito=Number(prompt("El deposito del mes "+i+" es:"));
	ahorro_total=ahorro_total+deposito;
	document.write("<br>"+"El deposito del mes "+i+" es: "+deposito);
}
document.write("<br>"+"El ahorro total sera "+ahorro_total);
