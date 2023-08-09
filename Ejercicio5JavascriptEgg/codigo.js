let operacion;
let continuar='s';
let resultado;
let primerNumero=4;
let segundoNumero;
console.log(typeof primerNumero);
let tipo1;
let tipo2;

while(operacion!='M'&&operacion!='S'&&operacion!='D'&&operacion!='R'||continuar=='s'){
	resultado=0;
	alert("Que operacion desea realizar?");
	operacion = window.prompt("ingrese la primera letra de la operacion elegida: Suma, Resta, Division, Multiplicacion");
	operacion = operacion.toUpperCase();
	primerNumero = window.prompt("Ingrese uno de los numeros");
	segundoNumero = window.prompt("Ingrese el otro numero");
	//tipo1 = typeof(primerNumero);
	//tipo2 = typeof(segundoNumero);

/*
	if(tipo1==='number' && tipo2==='number'){ //ojo que typeof retorna valores
		switch(operacion){
	    case 'S': resultado = primerNumero + segundoNumero;
        case 'R': resultado = primerNumero - segundoNumero;
        case 'M': resultado = primerNumero * segundoNumero;
        case 'D': resultado = primerNumero / segundoNumero;	
	    }
	    alert("El resultado del calculo es: "+resultado);
    }else{
    	alert("Ha ocurriod un error");
    }*/

    switch(operacion){
	    case 'S': resultado = primerNumero + segundoNumero;break;
        case 'R': resultado = primerNumero - segundoNumero;break;
        case 'M': resultado = primerNumero * segundoNumero;break;
        case 'D': resultado = primerNumero / segundoNumero;break;	
	    }
	    alert("El resultado del calculo es: "+resultado);

	
    continuar = window.prompt("Desea continuar? s o n");
	continuar = continuar.toLowerCase();
}

