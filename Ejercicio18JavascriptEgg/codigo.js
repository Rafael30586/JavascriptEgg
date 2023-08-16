
var valores = [true,5,false,"hola","adios",2];

if(valores[3].length>valores[4].length){
	alert("La cadena de la posicion 3 tiene mayor longitud");
}else if(valores[3].length<valores[4].length){
	alert("La cadena de la posicion 4 tiene mayor longitud");
}else{
	alert("Ambas cadenas tienen la misma longitud");
}

valores.push(valores[0]||valores[2]);
valores.push(valores[0]&&valores[2]);

const suma = valores[1] + valores[5];
const resta = valores[1] - valores[5];
const producto = valores[1] * valores[5];
const division = valores[1] / valores[5];
const modulo = valores[1] % valores[5];

alert(`Suma: ${suma}
	Resta: ${resta}
	Producto: ${producto}
	Division: ${division}
	Modulo: ${modulo}`);