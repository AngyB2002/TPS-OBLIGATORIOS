"use strict";
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
exports.__esModule = true;
var Cafetera = /** @class */ (function () {
    function Cafetera() {
        this.capacidadMaxima = 1000;
        this.cantidadActual = 0;
    }
    Cafetera.prototype.constructorConCapacidad = function (capacidadMaxima) {
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = capacidadMaxima;
    };
    Cafetera.prototype.constructorConCapacidadYCantidad = function (capacidadMaxima, cantidadActual) {
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = cantidadActual > capacidadMaxima ? capacidadMaxima : cantidadActual;
    };
    Cafetera.prototype.getCapacidadMaxima = function () {
        return this.capacidadMaxima;
    };
    Cafetera.prototype.getCantidadActual = function () {
        return this.cantidadActual;
    };
    Cafetera.prototype.setCapacidadMaxima = function (nuevaCapacidad) {
        this.capacidadMaxima = nuevaCapacidad;
        if (this.cantidadActual > nuevaCapacidad) {
            this.cantidadActual = nuevaCapacidad;
        }
    };
    Cafetera.prototype.setCantidadActual = function (nuevaCantidad) {
        if (nuevaCantidad < 0) {
            console.log("La cantidad no puede ser negativa.");
            return;
        }
        if (nuevaCantidad > this.capacidadMaxima) {
            console.log("La cantidad no puede ser mayor que la capacidad máxima.");
            return;
        }
        this.cantidadActual = nuevaCantidad;
    };
    Cafetera.prototype.llenarCafetera = function () {
        this.cantidadActual = this.capacidadMaxima;
    };
    Cafetera.prototype.servirTaza = function (cantidad) {
        if (this.cantidadActual >= cantidad) {
            this.cantidadActual -= cantidad;
            console.log("Sirviendo una taza de ".concat(cantidad, " c.c. de caf\u00E9."));
        }
        else {
            console.log("No queda suficiente café para llenar la taza.");
            this.cantidadActual = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.cantidadActual = 0;
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        this.cantidadActual += cantidad;
        if (this.cantidadActual > this.capacidadMaxima) {
            console.log("Se ha excedido la capacidad máxima de la cafetera.");
            this.cantidadActual = this.capacidadMaxima;
        }
    };
    return Cafetera;
}());
exports["default"] = Cafetera;
