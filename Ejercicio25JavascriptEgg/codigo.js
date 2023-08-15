let inputNombre = document.getElementsByName("nombre");
let inputApellido = document.getElementsByName("apellido");

function getFormValores(){
	let nombre = inputNombre[0].value;
	let apellido = inputApellido[0].value;
	alert("Nombre completo: "+nombre+" "+apellido);
}
