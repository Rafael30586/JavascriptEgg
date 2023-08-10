const pi = 3.14159;

class Circulo{
	constructor(){
		this.radio = Number(window.prompt("Ingresar el radio del circulo"));
	}

	calcularArea(){
		this.area = pi*this.radio*this.radio;
		return this.area;
	}

	calcularPerimetro(){
		this.perimetro = 2*pi*this.radio;
		return this.perimetro;
	}

	mostrarResultados(){
		alert("Area del circulo: "+this.calcularArea()+"\nPerimetro: "+this.calcularPerimetro());
	}
}

const c = new Circulo();
c.mostrarResultados();