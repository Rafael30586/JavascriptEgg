class Libro{
	constructor(){}

	cargarLibro(){
		this.isbn = window.prompt("Ingresar ISBN del libro: ");
		this.titulo = window.prompt("Titulo: ");
		this.autor = window.prompt("Autor: ");
		this.numeroPaginas = Number(window.prompt("Numero de paginas: "));
	}

	mostrarLibro(){
		alert("ISBN: "+this.isbn+"\nTitulo: "+this.titulo+"\nAutor: "+this.autor+"\nNumero de paginas: "+this.numeroPaginas);
	}
}

const l = new Libro();
l.cargarLibro();
l.mostrarLibro(); 