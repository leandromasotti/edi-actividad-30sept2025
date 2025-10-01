const Biblioteca = require('./biblioteca');

describe('Biblioteca', () => {
  let b;
  beforeEach(() => {
    b = new Biblioteca();
  });

  test('agregarLibro agrega un libro al array', () => {
    const libro = { titulo: 'El Principito', autor: 'Saint-Exupéry' };
    b.agregarLibro(libro);
    expect(b.libros).toContain(libro);
  });

  test('buscarPorTitulo devuelve el libro correcto', () => {
    const libro = { titulo: '1984', autor: 'George Orwell' };
    b.agregarLibro(libro);
    const encontrado = b.buscarPorTitulo('1984');
    expect(encontrado).toBe(libro);
  });

  test('buscarPorTitulo devuelve null si no existe', () => {
    expect(b.buscarPorTitulo('No existe')).toBeNull();
  });
});
