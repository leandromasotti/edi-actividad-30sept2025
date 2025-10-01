// archivo: biblioteca.js
class Biblioteca {
  constructor() {
    this.libros = [];
  }
  // Agrega un libro al arreglo de libros
  agregarLibro(libro) {
    this.libros.push(libro);
  }

  // Busca un libro por su título y lo retorna, o null si no existe
  buscarPorTitulo(titulo) {
    return this.libros.find(libro => libro.titulo === titulo) || null;
  }

  // Retorna el arreglo completo de libros
  listarLibros() {
    return this.libros;
  }
}

module.exports = Biblioteca;

let libro1 = {
  titulo: "Padre rico Padre pobre",
  autor: "Robert Kiyosaki",
  anio: 1997
};

let libro2 = {
  titulo: "El hombre más rico de Babilonia",
  autor: "George S. Clason",
  anio: 1926
};

let libro3 = {
  titulo: "Los secretos de la mente millonaria",
  autor: "T. Harv Eker",
  anio: 2005
};

let libro4 = {
  titulo: "El inversor inteligente",
  autor: "Benjamin Graham",
  anio: 1949
};

let libro5 = {
  titulo: "La psicología del dinero",
  autor: "Morgan Housel",
  anio: 2020
};

// Ejemplo de uso

let biblioteca = new Biblioteca();

for (let i = 1; i <= 5; i++) {
  biblioteca.agregarLibro(eval("libro" + i));
}

console.log(biblioteca.listarLibros());
