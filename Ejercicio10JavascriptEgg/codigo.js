
let palabra = window.prompt("Ingresar una palabra");
let palabraInvertida="";

let invertirCadena = (cadena) => {

	for(let i=cadena.length-1;i>=0;i--){
		//palabraInvertida += palabraInvertida.concat(cadena.substr(i));
		
		palabraInvertida += cadena.substr(i,1);
		console.log(i);
		console.log(palabraInvertida);
	}
}  

invertirCadena(palabra);

alert(palabraInvertida);