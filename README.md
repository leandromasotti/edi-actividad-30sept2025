# 📚 Mini Biblioteca Digital

## 🎯 Objetivo
El objetivo de este ejercicio es que practiques:
- Programación orientada a objetos (nivel intermedio).
- Uso de GitHub: **forks, ramas, commits y pull requests**.
- Buenas prácticas de colaboración en proyectos.

---

## 📝 Consigna
1. Haz un **fork** de este repositorio en tu cuenta de GitHub.
2. Crea una **rama** con tu nombre y apellido.  
   Ejemplo: feature-juan-perez

4. Implementa las siguientes funcionalidades en la clase `Biblioteca` (archivo `biblioteca.js`):

- `agregarLibro(libro)`: agrega un libro al array interno de la biblioteca.
- `buscarPorTitulo(titulo)`: busca un libro por su título y lo retorna si existe.
- `listarLibros()`: muestra todos los libros en consola.

4. Crea al menos **un test unitario** que valide tu código.
5. Haz **commit** de tus cambios con un mensaje descriptivo.  
Ejemplo:

git commit -m "Implementada función agregarLibro"

7. Envía un **Pull Request (PR)** al repositorio original.

---

## 🧪 Datos de ejemplo
Cada libro puede representarse como un objeto de JavaScript:
```javascript
const libro = {
titulo: "Cien años de soledad",
autor: "Gabriel García Márquez",
anio: 1967
};
