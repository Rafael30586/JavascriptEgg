
let frase = window.prompt("Escriba una frase");
let masLarga = " ";
let aux = "";
//let hayLetra = true;

function buscarLarga(_frase,_masLarga,_aux){
	_frase = _frase.concat(" ");
	
	for(let i=0;i<_frase.length;i++){

		if(_frase.substring(i,i+1)!=" "){
			_aux = _aux.concat(_frase.substring(i,i+1));
		}else{
			if(_masLarga.length<_aux.length){
				_masLarga = _aux;
			}	
			_aux="";
		}
		console.log("aux: "+_aux);
		console.log("masLarga: "+_masLarga);
	}

	return _masLarga;
}

masLarga = buscarLarga(frase,masLarga,aux);

alert("La palabra mas larga es: "+masLarga);