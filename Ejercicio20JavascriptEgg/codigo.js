
let matriz = [[3],[6],[9],[12],[15]];

function devolverArray(_matriz){ //[6, 9, 12, 15, 18]
	let arr = [];
	for(let i=0;i<_matriz.length;i++){
		arr[i] = _matriz[i][0] + 3;
	}
	return arr;
}

alert(devolverArray(matriz));

