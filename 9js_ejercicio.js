
//**********PREGUNTA #9
function PagoTotal(mes,pago){
	var multiplicacion=0;
	multiplicacion=mes*pago;
	return multiplicacion;

}
var pago_total=0;
var pago_mensual=0;
for(i=1;i<=20;i++){
	
	pago_mensual=PagoTotal(i,10);
	document.write("<br>"+ "El pago mensual del mes"+i+"sera: " + pago_mensual);
	pago_mensual=pago_mensual*i;
	pago_total=pago_total+pago_mensual;
}

document.write("<br>"+"El pago total sera: "+pago_total);