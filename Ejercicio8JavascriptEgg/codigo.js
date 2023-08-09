let numero=0;
let suma=0;
let promedio;
let minimo=0;
let maximo=0;
let contador=1;

numero = Number(window.prompt("Ingresar un numero"));
if(numero!=0){
	minimo = numero;
    maximo = numero;
    suma = numero;
}


while(numero!=0){
	numero = Number(window.prompt("Ingresar un numero"));
	
	if(numero>maximo && numero!=0){
		maximo = numero;
	}

	if(numero<minimo && numero!=0){
		minimo = numero;
	}

    if(numero!=0){
    	suma+=numero;
	    contador++;
    }
	
	console.log("Maximo: "+maximo);
	console.log("Minimo: "+minimo);
	console.log("Suma: "+suma);
}

promedio = suma/contador;

if(maximo!=0 && minimo!=0 && promedio!=0){
	alert("Maximo: "+maximo);
    alert("Minimo: "+minimo);
    alert("Promedio: "+promedio);
}else{
	alert("No se ha realizado ningun calculo porque presionaste cero nomas empezar. Salame");
}

