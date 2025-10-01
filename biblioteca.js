// archivo: biblioteca.js
class Biblioteca {
  constructor() {
    this.libros = [];
  }
  // TODO: agregarLibro(libro)
  agregarLibro(libro) {
    if (!libro || !libro.titulo) {
      throw new Error('El libro debe ser un objeto con la propiedad "titulo".');
    }
    this.libros.push(libro);
  }
  // TODO: buscarPorTitulo(titulo)
    buscarPorTitulo(titulo) {
    if (!titulo) return null;
    return this.libros.find(l => l.titulo === titulo) || null;
  }
  // TODO: listarLibros()
    listarLibros() {
    console.log('Libros en la biblioteca:');
    if (this.libros.length === 0) {
      console.log('(ninguno)');
      return;
    }
    this.libros.forEach((l, i) => {
      console.log(`${i + 1}. ${l.titulo} - ${l.autor || 'Autor desconocido'}`);
    });
  }
}

module.exports = Biblioteca;
