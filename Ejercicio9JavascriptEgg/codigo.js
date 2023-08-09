let frase = String(window.prompt("Ingrese una frase"));
//let longitud = frase.lenght;
console.log(frase);
let fraseResultante="";
console.log(frase.length);

for(let i=0;i<frase.length;i++){
	fraseResultante = fraseResultante.concat(frase.substring(i,i+1)+" ");
	console.log(i);
	console.log(fraseResultante);
}

alert(fraseResultante);