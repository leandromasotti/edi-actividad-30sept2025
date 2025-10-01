// archivo: biblioteca.test.js
const assert = require('assert');
const Biblioteca = require('./biblioteca');

(function testBiblioteca() {
  const b = new Biblioteca();

  // Prepara libros de ejemplo
  const libro1 = { titulo: 'Cien años de soledad', autor: 'García Márquez' };
  const libro2 = { titulo: 'Rayuela', autor: 'Cortázar' };

  // agregarLibro
  b.agregarLibro(libro1);
  b.agregarLibro(libro2);
  assert.strictEqual(b.libros.length, 2, 'Debería haber 2 libros agregados');

  // buscarPorTitulo
  const encontrado = b.buscarPorTitulo('Rayuela');
  assert.ok(encontrado, 'Debería encontrar un libro por su título');
  assert.strictEqual(encontrado.autor, 'Cortázar', 'El autor del libro encontrado debe coincidir');

  // listarLibros: debe imprimir y retornar el arreglo
  const logs = [];
  const originalLog = console.log;
  try {
    console.log = (msg) => logs.push(msg);
    const listado = b.listarLibros();
    assert.ok(Array.isArray(listado), 'listarLibros debe retornar un arreglo');
    assert.strictEqual(listado.length, 2, 'listarLibros debe retornar los 2 libros');
    assert.strictEqual(logs.length, 2, 'listarLibros debe imprimir 2 veces');
    assert.deepStrictEqual(logs[0], libro1, 'Primer log debe ser el primer libro');
    assert.deepStrictEqual(logs[1], libro2, 'Segundo log debe ser el segundo libro');
  } finally {
    console.log = originalLog;
  }

  console.log('OK - Todos los tests pasaron');
})();
