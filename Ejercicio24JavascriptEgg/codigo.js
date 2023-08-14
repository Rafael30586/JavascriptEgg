var a = document.getElementById("exampleInputEmail1"); //valueAsNumber

diametro = Number(a.valueAsNumber);
//console.log("Diametro: "+diametro);

function calcularRadio(){
	diametro = Number(a.valueAsNumber);
	//console.log(diametro);
	let radio = diametro/2;
	//console.log(radio);
	alert("El radio es: "+radio);
}

let boton = document.getElementById("boton");

boton.addEventListener("click",calcularRadio);