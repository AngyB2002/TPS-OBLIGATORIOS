//Desarrolla una clase Cafetera con atributos capacidadMaxima (la cantidad máxima de café que puede contener la cafetera) y cantidadActual (la cantidad actual de café que hay en la cafetera).
//Implementa, al menos, los siguientes métodos:
//-Constructor predeterminado: donde se establece la capacidad máxima en 1000 (c.c.) y la actual en cero (cafetera vacía).
//-Constructor con la capacidad máxima de la cafetera: Se inicializa la cantidad actual de café igual a la capacidad máxima. (cafetera llena)
//-Constructor con la capacidad máxima y la cantidad actual. Si la cantidad actual es mayor que la capacidad máxima de la cafetera, la ajustará al máximo.
//-Getters y Setters
//-llenarCafetera(): hace que la cantidad actual sea igual a la capacidad.
//-servirTaza(int): simula la acción de servir una taza con la capacidad indicada.
//Si la cantidad actual de café “no alcanza” para llenar la taza, se sirve lo que quede.
//-vaciarCafetera(): poné la cantidad de café actual en cero.
//-agregarCafe(int): añade a la cafetera la cantidad de café indicada. ¿Qué pasaría si sobrepasamos la cantidad máxima?

import Cafetera from './cafetera';

let miCafetera = new Cafetera();
console.log(`Capacidad máxima: ${miCafetera.getCapacidadMaxima()} c.c.`);
console.log(`Cantidad actual: ${miCafetera.getCantidadActual()} c.c.`);

miCafetera.llenarCafetera();
console.log(`Cantidad actual después de llenar: ${miCafetera.getCantidadActual()} c.c.`);

miCafetera.servirTaza(200);
console.log(`Cantidad actual después de servir taza: ${miCafetera.getCantidadActual()} c.c.`);

miCafetera.vaciarCafetera();
console.log(`Cantidad actual después de vaciar: ${miCafetera.getCantidadActual()} c.c.`);

miCafetera.agregarCafe(1500);
console.log(`Cantidad actual después de agregar café: ${miCafetera.getCantidadActual()} c.c.`);