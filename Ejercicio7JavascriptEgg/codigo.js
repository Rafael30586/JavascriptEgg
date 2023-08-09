let limite = Number(window.prompt("Ingresar un valor limite positivo"));

let numero=0;
let suma=0;
let contador=0;

while(suma<=limite){
	if(contador>0){
		numero = Number(window.prompt("Ingresar otro valor"));
	}else{
		numero = Number(window.prompt("Ingresar un valor"));
	}
	
	suma = suma + numero;
	console.log(suma);
	contador = contador + 1;
	console.log(contador);
}

alert("Has superado el limite inicial");