
//**********PREGUNTA #7
	var dias_semana=["lunes","martes","miercoles","jueves","vierne","viernes"];
	var dias=dias_semana.lenght;
	var sueldo=0;
	var total_horas=0;
for(i=0;i<=dias-1;i++){
	var horas=Number(prompt("Horas de trabajo del dia"+dias_semana[i]+" es:"));
	total_horas=total_horas+horas;
	document.write("trabajo"+total_horas+"horas");
	var salario=Number(prompt("El pago por hora será: "));

}

	sueldo=salario*total_horas;
document.write("<br>"+"El sueldo de esta persona sera"+sueldo);
