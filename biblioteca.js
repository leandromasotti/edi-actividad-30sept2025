// archivo: biblioteca.js
class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  buscarPorTitulo(titulo) {
    return this.libros.find((libro) => libro.titulo === titulo);
  }

  listarLibros() {
    this.libros.forEach((libro) => console.log(libro));
    return this.libros;
  }
}

module.exports = Biblioteca;
