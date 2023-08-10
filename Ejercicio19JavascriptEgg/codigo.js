
const a = [];
let b = [];

for(let i=0;i<50;i++){
	a[i] = Math.random()*10;
}

alert(a);

a.sort(function(a, b){return a - b});

for(let i=0;i<20;i++){
	if(i<10){
		b[i] = a[i];
	}else{
		b[i] = 0.5;
	}

}

alert("Arreglo a: "+a);
alert("Arreglo b: "+b);