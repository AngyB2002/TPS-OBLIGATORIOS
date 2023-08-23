"use strict";
//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.cambiarTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Cliente.prototype.toString = function () {
        return "El numero de tel\u00E9fono de ".concat(this.nombre, " es: ").concat(this.telefono);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
/*export default Cliente;*/ //Otra forma de exportar
